import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS employees
            (id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL)''')

conn.close()
