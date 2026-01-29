""" ბანკის პროგრამა
• საწყისი ბალანსი: 1000 ლარი
•    მთავარი მენიუ (while ციკლით):
1. ბალანსის შემოწმება
2. თანხის შეტანა
3. თანხის გატანა
4. ბოლო 5 ტრანზაქციის ნახვა
5. გასვლა
•    ყოველ ოპერაციაზე:
- იყენებს try-except ბლოკს:
* ValueError - არასწორი რიცხვის შეტანა
* არასწორი მენიუს არჩევანი
- თანხის გატანისას ამოწმებს საკმარისი ბალანსის არსებობას
- შეტანისას და გატანისას ამოწმებს დადებითი რიცხვის შეყვანას
•    ინახავს ტრანზაქციების ისტორიას სიაში: [{'type': 'შეტანა/გატანა', 'amount': თანხა, 'balance': ახალი_ბალანსი}, ...]
•    აჩვენებს ბოლო 5 ტრანზაქციას ფორმატირებული სახით
•    გასვლისას აჩვენებს საბოლოო ბალანსს და ტრანზაქციების რაოდენობას"""

balance = 1000
transactions = []

def log_transication(type, amount, balance):
    new_transaction = {
        "type": type,
        "amount": amount,
        "balance": balance
    }
    transactions.append(new_transaction)


# {'type': 'შეტანა/გატანა', 'amount': თანხა, 'balance': ახალი_ბალანსი}, ...
def deposit(balance):
    while True:
        try:
            amount = int(input("შეიყვანეთ თანხის რაოდენობა: "))

            if amount <= 0:
                print("შესატანი თანხის ოდენობა უნდა აღემატობდეს ნულს")
                raise ValueError("შესატანი თანხის ოდენობა უნდა აღემატობდეს ნულს")
            else:
                break
        except ValueError:
            print("გთხოვთ სწორად შეიყვანოთ რაოდენობა")
    
    balance += amount
    print(f"ანგარიზე წარმატებით განხორცილდა {amount}₾-ის შეტანა")
    log_transication("deposit", amount, balance)
    return balance

def withdraw(balance):
    while True:
        try:
            amount = int(input("შეიყვანეთ თანხის რაოდენობა: "))

            if amount <= 0:
                print("შესატანი თანხის ოდენობა უნდა აღემატობდეს ნულს")
                raise ValueError("შესატანი თანხის ოდენობა უნდა აღემატობდეს ნულს")
            if amount > balance:
                print("გასატანი თანხის ოდენობა აღემატება ანგარიშზე არსებულ თანხას")
                raise ValueError
            else:
                break
        except ValueError:
            print("გთხოვთ სწორად შეიყვანოთ რაოდენობა")
    
    balance -= amount
    print(f"ანგარიშიდან წარმატებით მოხდა თანხის {amount}₾ გატანა და დარჩენილია {balance}₾")
    log_transication("withdraw", amount, balance)
    return balance

def check_transactions(logs):
    
    while len(logs) > 5:
        logs.pop(0)
    
    print(transactions)

while True:
    print("---მთავარი მენიუ---")
    print("1. ბალანის შემოწმება")
    print("2. თანხის შეტანა")
    print("3. თანხის გატანა")
    print("4. ბოლო 5 ტრანაქციის ნახვა")
    print("5. პროგრამიდან გასვლა")

    try:
        operation = int(input("აირჩიეთ ოპერაცია (1-5): "))
    except ValueError:
        print("გთხოვთ სწორად აირჩიოთ ოპერაცია")
        operation = int(input("აირჩიეთ ოპერაცია (1-5): "))
    
    if operation == 1:
        print(f"თქვენს ანგარიშზე თანხა შეადგენს {balance}₾")
    elif operation == 2:
        new_balance = deposit(balance)
        balance = new_balance
    elif operation == 3:
        new_balance = withdraw(balance)
        balance = new_balance
    elif operation == 4:
        check_transactions(transactions)
    elif operation == 5:
        print("პროგრამიდან გასვლა")
        break
    else:
        print("გთხოვთ აირჩიოთ ოპერაცია: 1, 2, 3, 4, 5")