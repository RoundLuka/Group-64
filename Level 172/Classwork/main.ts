// let firstName = "Luka"
// let lastName: string;
// lastName = "Gurgenidze"


// type boolString = boolean | string | [];

// let state: boolString = "pending";
// state = true

// type narrowing - typescript-ს თვისებაა როდესაც მას შეუძლია
// ნებსმიერ დროს, კოდის ნებისმიერ ადგილას წინასწარ იცოდეს ცვლადის ტიპი

// function processData(info: number | string): string | number {
//     if(typeof info == "number") {
//         // აქ info რიცხვია
//         return info
//     } else {
//         // აქ info სტრინგია
//         return info.toLowerCase()
//     }
// }

// console.log(processData(5))
// console.log(processData("LUKA"))

// let programmingTechs: strong = ["AI", "Game Dev", "Web Dev", 10, 235]

// literal type 
// type sides = "Left" | "Right" | "Bottom" | "Top"

// let walkingDirection: sides = "Right"

// enum

// enum Direction {
//     NORTH = "North",
//     SOUTH = "South",
//     WEST = "West",
//     EAST = "East"
// }

// let wind: Direction = Direction.EAST

// enum Rank {
//     Private,
//     Coporal,
//     Sergeant,
//     Lietenaunt,
//     Captain,
//     Major,
//     Colonel,
//     General,
// }

// let ryan: Rank = Rank.Private;
// let Gregor: Rank = Rank.Major
// let america: Rank = Rank.Captain


// console.log(ryan)
// console.log(Gregor)
// console.log(america)

// generics

type academy<T> = {
    title: T,
    CEO: T,
    students: T[]
    mentor: [T, T, T, number, boolean]
}

// pattern
let goa: academy<number> = {
    title: 5,
    CEO: 5,
    students: [5, 5],
    mentor: [5, 5, 5, 2, true]
}

function generateArray<T>(item: T, amount: number): T[] {
    let arr = []
    for(let i = 0; i < amount; i++) {
        arr.push(item)
    }
    return arr;
}

console.log(generateArray<string>("twetwe", 5))
console.log(generateArray<boolean>(true, 8))
console.log(generateArray(12, 8))