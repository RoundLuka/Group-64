# ord - ღებულობს პარამეტრად string literal, 1 ტექსტური სიმბოლო 
# გაძლევთ სიმბოლოს შესაბმის კოდს ასკის ცხრილიდან
# chr - ღებულობს 10 სისტემაში მთელ რიცხვს
# გაძლევთ ასკის კოდის მიხედვით შესაბმის სიმბოლოს

# print(ord("A"))
# print(chr(65))

# შექმენით ფუქნცია სახელად case_swap რომელიც მიიღებს სიტყვას (.upper(), .lower() მეთოდების გამოყენების გარეშე) დიდ ანბანის ასოს გარდაქმნის პატარად და პირიქით



# aBcDe -> AbCdE


def swap_case(word):
    res = ""
    for char in word:
        code = ord(char)

        if 65 <= code <= 90:
            res += chr(code + 32)
        elif 97 <= code <= 122:
            res += chr(code - 32)
        else:
            res += char
    return res


print(swap_case("aBcDe"))