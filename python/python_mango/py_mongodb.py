#install pymongo (pip install pymango)
from pymongo import MongoClient as MG
DB_name="priya"
collection_name="recurt"
# MongoDB connection string
url = "mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/?retryWrites=true&w=majority"

# Create a MongoClient object
connect = MG(url)

try:
    db = connect[DB_name]

    collection = db[collection_name]

    query_result = collection.insert_one({"key": "value"})
    
    print(query_result)

finally:
    # Close the MongoDB connection
    connect.close()
