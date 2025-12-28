import random

students = [
    "ბექა აბულაძე",       
    "გიო ზაქარაია",                    
    "ირაკლი ბედოშვილი",       
    "იოანე ბენდელიანი",        
    "იოანე მელაძე",        
    "ლაზარე თიგიშვილი",        
    "ლუკა ლეფსვერიძე",      
    "ლუკა მამგუაშვილი",           
    "ნატალი ოქროპირიძე",       
    "ნიკა ბაზანდარაშვილი",      
    "ნიკა დავითაშვილი",                             
    "საბა თავართქილაძე",       
    "ტარიელ ბეჟანიშვილი",     
    "ლუკა შავაძე",                    
]

captain1 = ["დემეტრე ხოსროშვილი",]
captain3 = ["ელენე ივეჩიანი"]

captain2 = ["ვაკო პაკსაძე"]
captain4 = ["ნიკა კვიციანი",]


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

for i in range(3):
    captain4.append(students[-1])
    students.pop()

print("პირველი გუნდი " + str(captain1))
print("მეორე გუნდი " + str(captain2))
print("მესამე გუნდი " + str(captain3))
print("მეოთხე გუნდი " + str(captain4))


