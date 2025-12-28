import random

students = [
    "ბექა აბულაძე",
    "გიო ზაქარაია",	
    "ირაკლი ბედოშვილი",	
    "იოანე მელაძე",
    "ლაზარე თიგიშვილი",	
    "ლუკა მამგუაშვილი",	
    "ლუკა შავაძე",	 
    "ნიკა ბაზანდარაშვილი",
    "ნიკა დავითაშვილი",	
    "ნიკა კვიციანი",      
    "ტარიელ ბეჟანიშვილი",	
]

captain1 = ["ნატალი ოქროპირიძე",]
captain2 = ["ვაკო პაკსაძე",]
captain3 = ["დემეტრე ხოსროშვილი",]
captain4 = ["ლუკა ლეფსვერიძე",]


random.shuffle(students)


for i in range(3):
    captain1.append(students[-1])
    students.pop()

for i in range(3):
    captain2.append(students[-1])
    students.pop()
    
for i in range(3):
    captain3.append(students[-1])
    students.pop()

for i in range(2):
    captain4.append(students[-1])
    students.pop()

print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))
print("მესამე გუნდი " + str(captain3))
print("მეოთხე გუნდი " + str(captain4))


