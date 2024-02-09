
import pandas as pd; import numpy as np
import seaborn as sns
from sklearn.neighbors import NearestNeighbors
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pickle


#Download current products data
uri = "mongodb+srv://admin:capstoneproject@cluster0.vzztiaj.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

mydb = client["capstonedb"]
products = mydb["products"]
pdata = pd.DataFrame(products.find({}))
len(pdata)
pdata.to_csv('C:/Users/wasadmin/Desktop/GIT/Capstone/data/pets1k.csv',index=False)
pdata

#Step 0: Load
ifile = 'C:/Users/wasadmin/Desktop/GIT/Capstone/data/pets1k.csv'
df = pd.read_csv(ifile,header=0)
#Step 1: Prepare the data
#Features we want: Price, Popularity, Age, Personality, Size
trimdf = pd.DataFrame()
trimdf = df[['price','popularity','age']]
# trimdf['personality'] = df['personality']
# trimdf['size'] = df['size']
# trimdf = pd.get_dummies(trimdf)

# Build the recommendation model
model = NearestNeighbors(n_neighbors=3)
model.fit(trimdf.values) # Use the values of the DataFrame instead of the DataFrame itself

# Example: Get recommendations for a product
row_index = df.index[df['name'] == 'Anthony'].tolist()[0]
print(row_index)

product_index = row_index  # Index of the product for which recommendations are sought
product_features = trimdf.iloc[product_index].values.reshape(1, -1)
distances, indices = model.kneighbors(product_features)

# Retrieve recommended product indices
recommended_product_indices = indices.flatten()

# Get the recommended product names
recommended_products = df.iloc[recommended_product_indices]['name']

# Print the recommended products
print(f"Recommended products for {df['name'][product_index]}:")
print(recommended_products.to_string(index=False))

df.iloc[recommended_product_indices]


row_index = df.index[df['name'] == 'James'].tolist()
print(row_index[0])