# import random

# def get_bingo_card():
    
#     res = []
    
#     for column in range(5):
        
#         col = []
    
#         for element in range(5):
        
#             if column == 0:
#                 randomNumber = "B" + str(random.randint(1, 15))

#                 col.append(randomNumber)
#             elif column == 1:
#                 col.append("I" + str(random.randint(16, 30)))
#             elif column == 2:
#                 col.append("N" + str(random.randint(31, 45)))
#             elif column == 3:
#                 col.append("G" + str(random.randint(46, 60)))
#             elif column == 4:
#                 col.append("O" + str(random.randint(61, 75)))
            
#         res.append(col)
    
#     res = res[2].pop()
#     return res

arr = [5, 4, 32, 5]

double_number = lambda x: x * 2
doubledArr = list(map(double_number, arr))

print(doubledArr)