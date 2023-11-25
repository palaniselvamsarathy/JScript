let items = [
    {name:"apple",category:"fruit"},
    {name:"banana",category:"fruit"},
    {name:"tomato",category:"Vegetable"},
    {name:"orange",category:"fruit"},
    {name:"dragon fruit",category:"fruit"},
    {name: "brinjol",category:"Vegetable"},
    {name:"kiwi",category:"fruit"},
    {name: "potato",category:"Vegetable"},
    {name:"kiwi",category:"fruit"},
    {name: "chilli",category:"Vegetable"},
    {name:"pineapple",category:"fruit"},
    {name:"watermelon",category:"fruit"},
    {name: "red chilli",category:"Vegetable"}
]

let cateGory = items.filter((cate=>cate.category==="Vegetable"))

console.log(cateGory)