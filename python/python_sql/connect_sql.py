import sqlite3
import os

# Get the absolute path to the directory containing the script
script_directory = os.path.dirname(os.path.abspath(__file__))
print(script_directory)
# Connect to the SQLite database
#database_path = os.path.join(script_directory, 'firstdb.db')

# Connect to the SQLite database
connection = sqlite3.connect(f"{script_directory}/firstdb.db")

# Create a cursor object
cursor = connection.cursor()

# Execute SQL query to create a new table (if not exists)
cursor.execute('''CREATE TABLE IF NOT EXISTS new_table3 (
                    id INTEGER PRIMARY KEY,
                    column1 TEXT,
                    column2 INTEGER,
                    column3 REAL
                 )''')

# Commit changes to the database
connection.commit()

# Insert new values into the table
new_values = [
    ('id1', 10, 1.5),
    ('id2', 20, 2.5),
    ('id3', 30, 3.5)
]

cursor.executemany('INSERT INTO new_table3 (column1, column2, column3) VALUES (?, ?, ?)', new_values)

# Commit changes to the database
connection.commit()

# Close the cursor
cursor.close()

# Close the connection
connection.close()
