import sqlite3

# with sqlite3.connect("wtyw.db") as conn1:
#     cursor = conn1.cursor()

connection = sqlite3.connect("project.db")

cursor = connection.cursor()


# cursor.execute("""CREATE TABLE Users (
#             Username TEXT,
#             Email TEXT,
#             Password TEXT,
#             Balance INT
#             )""")

# cursor.execute("""INSERT INTO Users (Username, Email, Password, Balance) 
#             VALUES
#             ('Luka', 'Example@gmail.com', 'luka1234', 500),
#             ('Nika', 'davit@gmail.com', 'luka1234', 1000),
#             ('Cotne', 'bacho@gmail.com', 'luka1234', 1500)
#                 """)

# cursor.execute("INSERT INTO Users (Username, Email, Password, Balance) Values ('{}', '{}', '{}', '{}')".format("value 1", "value 2", "value 3", 500))


# cursor.execute("INSERT INTO Users (Username, Email, Password, Balance) Values (:first, :last, :email, :bal)", {
#     "first": "andria",
#     "last": "gaduashvili",
#     "email": "andria@gmail.com",
#     "bal": 5000
# })

def add_record(username, email, password, balance):
    cursor.execute(f"INSERT INTO USERS (username, email, password, balance) VALUES ('{username}', '{email}', '{password}', '{balance}')")


# add_record("PAVLE", "wtwrty@gmail.com", "@$^WRYRy", 500)
# add_record("PAVLE", "wtwrty@gmail.com", "@$^WRYRy", 500)
# add_record("PAVLE", "wtwrty@gmail.com", "@$^WRYRy", 500)


# cursor.execute("""DELETE from Users Where Username = 'giorgi' """)
cursor.execute("""Update USERS SET Password = 'z64w$#&^#YWRY' Where Username = 'Luka' """)

# ერთი ჩანაწერის (პირველის) წამოღება
# print(cursor.execute("Select * from Users").fetchone())
# სამი ჩანაწერის (პირველი სამის) წამოღება
# print(cursor.execute("SELECT * FROM Users").fetchmany(3))
print(cursor.execute("SELECT * FROM USERS").fetchall())


# for x in cursor.fetchall():
#     print(x)
# for tup in result.fetchmany(5):
#     print(tup)
# print(cursor.fetchone()) 




connection.commit()
connection.close()