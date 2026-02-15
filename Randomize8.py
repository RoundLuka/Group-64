import random

students = [	
    "გიო ზაქარაია",	
    "ირაკლი ბედოშვილი",		
    "იოანე მელაძე",		
    "ლაზარე თიგიშვილი",		
    "ლუკა ლეფსვერიძე",		
    "ლუკა მამგუაშვილი",			
    "ნატალი ოქროპირიძე",	
    "ნიკა დავითაშვილი",		
    "ნიკა კვიციანი",		
    "ტარიელ ბეჟანიშვილი",		
    "ვაკო პაკსაძე",		
]

print(len(students))

captain1 = ["ელენე იევიჩიანი",]
captain2 = ["ბექა აბულაძე",	]
captain3 = ["ლუკა შავაძე",]


random.shuffle(students)

for i in range(4):
    captain1.append(students[-1])
    students.pop()

for i in range(4):
    captain2.append(students[-1])
    students.pop()
    
for i in range(3):
    captain3.append(students[-1])
    students.pop()

print(students)

print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))
print("მესამე გუნდი " + str(captain3))


