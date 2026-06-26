
// var keyword-ის მეშვეობით ვქმნით გლობალურ ცვლადს, დადებითი მხარე ამ ტიპის ცვლადისა ის არის რომ ყველგან ხელმისაწვდომია, მაგრამ გვერდზე უფრო დიდი გავლენა

// let შექმნილი ცვლადი ხელმისწვოდმია (შეგვიძლია გამოვიყენოთ იმ ბლოკში) სადაც შეიქმნა და მის ქვემოთ ჩაწერილ ბლოკებში, ხოლო გარე scope-ში უბრალოდ არ არსებობს



function OuterScope() {

    function InnerScope() {
        for(let i = 0; i < 10; i++) {
            username = "luka"
            console.log(username)
        }
    }

    InnerScope()

    console.log(username)
}

OuterScope()

console.log(username)

let message;
message = 1
console.log(message)