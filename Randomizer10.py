import random

students = [			
    "გიო ზაქარაია",		
    "ლაზარე თიგიშვილი",		
    "ლუკა ლეფსვერიძე",			
    "საბა გიორგაძე",
    "ანდრია ღადაუაშვილი",
    "ვაკო პაკსაძე",
    "ბექა აბულაძე",
]

captain1 = ["ლუკა მამგუაშვილი",]
captain2 = ["ნიკა კვიციანი",]
captain3 = ["ნიკა დავითაშვილი",]

random.shuffle(students)

for i in range(3):
    captain1.append(students[-1])
    students.pop()

for i in range(2):
    captain2.append(students[-1])
    students.pop()


for i in range(2):
    captain3.append(students[-1])
    students.pop()


print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))
print("მესამე გუნდი " + str(captain3))

