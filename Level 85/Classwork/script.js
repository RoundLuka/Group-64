let academies = [
    {
        "Academy": "GOA",
        "Students": 1000.0,
        "CEO": "Nika Keshelava",
        "Working": true,
        "Languages": ["HTML", "CSS", "JS"]
    },
    {
        "Academy": "Unkown",
        "Students": 3,
        "CEO": null,
        "Working": false,
        "Languages": ["Chiense"]
    }
]

console.log(JSON.stringify(academies))
console.log(JSON.parse())

// JSON.stringify(object/arr) - javascript-ის ერთ ობიექტის სიმრავლეს (მასივს, ობიექტს) მონაცემებს გარდაქმნის ერთ დიდ სტრინგად
// JSON.parse(string) - string-ად ჩაწერილ js-ის data-ს გარდაქმნის რეალურ ობიექტებად მასივებად ა.შ