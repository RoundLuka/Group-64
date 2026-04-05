import random

students = [			
    "გიო ზაქარაია",		
    "ლაზარე თიგიშვილი",		
    "ლუკა ლეფსვერიძე",	
    "ლუკა მამგუაშვილი",		
    "ნიკა დავითაშვილი",		
    "ნიკა კვიციანი",
]

	

captain1 = ["ვაკო პაკსაძე",	]
captain2 = ["ბექა აბულაძე",]


random.shuffle(students)

for i in range(3):
    captain1.append(students[-1])
    students.pop()

for i in range(3):
    captain2.append(students[-1])
    students.pop()


print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))


