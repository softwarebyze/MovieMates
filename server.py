import pickle
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from scipy.sparse import csr_matrix
import json
import boto3

app = Flask(__name__)

s3 = boto3.client('s3')
bucket_name = 'flask-itc'
model_file_name = 'churn_model.pkl'
matrix_original_file_name = 'matrix_original.csv'
user_item_matrix_file_name = 'user_item_matrix.csv'

s3.download_file(bucket_name, model_file_name, '/tmp/model.pkl')
model = pickle.load(open('/tmp/model.pkl', 'rb'))
s3.download_file(bucket_name, matrix_original_file_name, '/matrix_original.csv')
matrix_original = pd.read_csv('/matrix_original.csv')
s3.download_file(bucket_name, matrix_original_file_name, '/user_item_matrix.csv')
user_item_matrix = pd.read_csv('/user_item_matrix.csv')

# matrix_original = pd.read_csv('matrix_original.csv')
# user_item_matrix = pd.read_csv('user_item_matrix.csv')
# model = pickle.load(open('csr_model.pkl', 'rb'))
user_item_matrix.set_index('userId', inplace=True)


@app.route('/mates', methods=['POST'])
def find_movie_mates():
    json_data = request.get_json()

    movie_ratings = json_data['movie_ratings']  # the key in the json data is 'movie_ratings'
    new_user_ratings = dict(movie_ratings)
    print(new_user_ratings)
    user = pd.DataFrame([np.zeros(matrix_original.columns.shape)], columns=matrix_original.columns)
    user.loc[:, new_user_ratings.keys()] = new_user_ratings.values()

    user_mask = user_item_matrix.index
    movie_mask = user_item_matrix.columns

    new_user_item_matrix = user.loc[:, movie_mask]

    user_csr_data = csr_matrix(new_user_item_matrix.values)
    distances, indices = model.kneighbors(user_csr_data, n_neighbors=25)
    closest_users_indexes = indices[0]
    original_indexes = user_item_matrix.index[closest_users_indexes]

    # return 'ok'
    return jsonify({'closest': original_indexes.values.tolist()})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
    # app.run()
