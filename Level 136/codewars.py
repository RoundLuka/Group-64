# def some_decorator(func):
#     cache = {}
#     def wrapper(*args):
#         if args not in cache:
#             print("Calculated", func(*args))
#             cache[args] = func(*args)
#         else:
#             print("Used stored previous cacluation")

#         return cache[args]
#     return wrapper

# @some_decorator
# def square(n):
#     return n ** 2

# def cube(n):
#     return n ** 3

# def power4(n):
#     return n ** 4

# print(square(5))
# print(square(5))
# print(square(5))

"""2) დაწერეთ დეკორატორ ფუნქცია, რომელიც ტექსტს დაამუშავებს და გარკვეულ სიტყვებს „გაფილტრავს“. 
გაქვთ ფუნქცია, რომელსაც გადაეცემა ტექსტი.  ფუნქციამ უნდა დაითვალოს ტექსტში ასო-ბგერების რაოდენობა. 
დეკორატორმა კი - ტექსტში შემავალი კონკრეტული სიტყვები (თქვენი გემოვნებით) ჩაანაცვლოს *** სიმბოლოებით."""



# def replace_decorator(func):

#     replace = {
#         "backend": 'frontend',
#         'all': 'one',
#         'stack': 'stock',
#         "now": 'never'
#     }

#     def wrapper(sentence):

#         sentence = sentence.lower()

#         words = sentence.split(" ")

#         new_words = []

#         for word in words:
#             if word in replace:
#                 new_words.append(replace[word])
#             else:
#                 new_words.append(word)
        
#         new_sentence = " ".join(new_words)

#         return func(new_sentence)
#     return wrapper

# @replace_decorator
# def process_text(sentence):

#     alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#     sentence = sentence.upper()
#     letters = 0
#     for char in sentence:
#         if char in alphabet:
#             letters += 1
#     return letters

# print(process_text("Backend was very fun, all left to learn now is databases to complete mern stack"))


# """3) 
# დაწერეთ დეკორატორ ფუნქცია, რომელიც ინფორმაციას შეინახავს ფაილში. 
# გაქვთ ფუნქცია, რომელსაც გადაეცემა ტექსტი და დამატებით ერთი არგუმენტი, 
# რომელიც განსაზღვრავს ტექსტი მაღალ რეგისტრში უნდა გადავიდეს თუ დაბალში. 
# მიღებული შედეგი კი დეკორატორმა ფაილში უნდა ჩაწეროს."""

# def log_data(func):
#     def wrapper(*args):
#         (data, file_path) = func(*args)

#         with open(file_path, 'w+') as file:
#             file.write(data)
#     return wrapper

# @log_data
# def determine(text, registry):
#     if registry == "upper":
#         return (text.upper(), 'upper.txt')
#     elif registry == "lower":
#         return (text.lower(), 'lower.txt')
#     else:
#         return (text, 'default.txt')

# print(determine("wetyw teryrey reyeryery ", "lower"))
# print(determine("ewrytre ysdry%$@#^@^&#yeruer reyeryery ", "upper"))
# print(determine("ewrytrrjre ttyurt%#ysehrtj363dry%$@5684#iyrt^@uiry^&#yeruer reyeryery ", "untd"))

'''
დაწერეთ დეკორატორ ფუნქცია, რომელიც შეინახავს ისტორიას. 
გაქვთ ფუნქცია, რომელიც ორ რიცხვს კრებს, დეკორატორი კი ბოლო ხუთ გამოთვლას ინახავს 
და მთავარ შედეგთან ერთად პრინტავს.
'''

def history_decorator(func):

    last_five_operations = []
    def wrapper(*args):
        result = func(*args)
        
        last_five_operations.append({args: result})

        while len(last_five_operations) > 5:
            last_five_operations.pop(0)

        print(f"Last five operations list ${last_five_operations}")
        return result
    return wrapper

@history_decorator
def add(x, y):
    return x + y

add(2, 3)
add(11, 4)
add(2, 7)
add(7, 4)
add(8, 9)
add(8, 9)