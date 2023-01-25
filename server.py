# import pickle
# import pandas as pd
from flask import Flask, request, jsonify
# import json
# import boto3

app = Flask(__name__)

# s3 = boto3.client('s3')
# bucket_name = 'flask-itc'
# file_name = 'churn_model.pkl'
# s3.download_file(bucket_name, file_name, '/tmp/model.pkl')
# clf = pickle.load(open('/tmp/model.pkl', 'rb'))


@app.route('/mates', methods=['POST'])
def find_movie_mates():
    json_data = request.get_json()
    print(json_data)

    processed_data = json_data['input'] * 2

    return jsonify(output=processed_data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
