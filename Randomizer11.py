import random

students = [					
    "ლაზარე თიგიშვილი",		
    "ლუკა ლეფსვერიძე",			
    "საბა გიორგაძე",
    "ნიკა კვიციანი",
    "ნიკა დავითაშვილი",
]


captain1 = ["ანდრია ღადაუაშვილი",]
captain2 = ["ბექა აბულაძე",]
captain3 = ["ვაკო პაკსაძე",]

random.shuffle(students)

for i in range(2):
    captain1.append(students[-1])
    students.pop()

for i in range(2):
    captain2.append(students[-1])
    students.pop()


for i in range(1):
    captain3.append(students[-1])
    students.pop()


print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))
print("მესამე გუნდი " + str(captain3))

