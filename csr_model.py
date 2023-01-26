import pickle
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors

df = pd.read_csv('ml-latest-small/ratings.csv')
matrix_original = (df.pivot(index='userId', columns='movieId', values='rating') * 2).fillna(0)

users_votes = df.groupby('userId')['rating'].agg('count')
movies_votes = df.groupby('movieId')['rating'].agg('count')

user_mask = users_votes[users_votes > 50].index
movie_mask = movies_votes[movies_votes > 10].index

user_item_matrix = matrix_original.loc[user_mask, movie_mask]

csr_data = csr_matrix(user_item_matrix.values)

knn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=25, n_jobs=-1)
knn.fit(csr_data)

pickle.dump(knn, open("csr_model.pkl", "wb"))

matrix_original.to_csv("matrix_original.csv", index=True, header=True)
user_item_matrix.to_csv("user_item_matrix.csv", index=True, header=True)
