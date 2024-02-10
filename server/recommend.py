import sys
import json
# Use sys.argv to access the passed objectid

cartItem = sys.argv[1]
n = int(sys.argv[2]) + 1
recommendations = []

import pandas as pd; import numpy as np
from sklearn.neighbors import NearestNeighbors
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
#Download current products data
uri = "mongodb+srv://admin:capstoneproject@cluster0.vzztiaj.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
mydb = client["capstonedb"]
products = mydb["products"]
pdata = pd.DataFrame(products.find({}))
#Step 1: Prepare the data | Price, Popularity, Age
trimdf = pd.DataFrame()
soldMask = pdata['sold'] == 'true'
unsold = pdata[~soldMask]
trimdf = unsold[['price','popularity','age']]
# Build the recommendation model
model = NearestNeighbors(n_neighbors=n)
model.fit(trimdf.values)
#Get recommendations
row_index = pdata.index[pdata['_id'] == ObjectId(cartItem)].tolist()[0]
product_index = row_index  # Index of the product for which recommendations are sought
product_features = trimdf.iloc[product_index].values.reshape(1, -1)
distances, indices = model.kneighbors(product_features)
# Retrieve recommended product indices
recommended_product_indices = indices.flatten()
# Get the recommended products data
recommendations = pdata.iloc[recommended_product_indices]
# Print the response as JSON (python-shell reads stdout)
recommendations[['_id','released']] = recommendations[['_id','released']].astype(str)
recommendations = recommendations.iloc[1:,:]
print(json.dumps(recommendations.to_dict(orient='records')))