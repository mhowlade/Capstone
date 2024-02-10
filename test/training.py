
import pandas as pd; import numpy as np
import seaborn as sns
from sklearn.neighbors import NearestNeighbors
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pickle


#Download current products data
uri = "mongodb+srv://admin:capstoneproject@cluster0.vzztiaj.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
mydb = client["capstonedb"]
products = mydb["products"]
pdata = pd.DataFrame(products.find({}))
#Step 1: Prepare the data | Price, Popularity, Age
trimdf = pd.DataFrame()
trimdf = pdata[['price','popularity','age']]
# Build the recommendation model
model = NearestNeighbors(n_neighbors=3)
model.fit(trimdf.values) # Use the values of the DataFrame instead of the DataFrame itself
#Get recommendations
row_index = pdata.index[pdata['_id'] == cartItem].tolist()[0]
product_index = row_index  # Index of the product for which recommendations are sought
product_features = trimdf.iloc[product_index].values.reshape(1, -1)
distances, indices = model.kneighbors(product_features)
# Retrieve recommended product indices
recommended_product_indices = indices.flatten()
# Get the recommended product names
recommended_products = pdata.iloc[recommended_product_indices]['name']
recommendations = pdata.iloc[recommended_product_indices]