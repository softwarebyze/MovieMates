import requests
import json

# Prepare the JSON object to send to the server
movieIds = [1, 2, 3, 7, 10]

new_user_ratings = {'movie_ratings': {key: value for key, value in zip(movieIds, [4, 3, 5, 4, 6])}}
data = {'input': 5}
headers = {'Content-type': 'application/json'}

# Send the JSON object to the server and get the response
response = requests.post('http://3.76.47.76:8080/mates', data=json.dumps(data), headers=headers)
# response = requests.post('http://localhost:5000/mates', data=json.dumps(new_user_ratings), headers=headers)

# Print the response from the server
# print(response.json())
print(response.text)
