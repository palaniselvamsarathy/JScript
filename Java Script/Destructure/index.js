// 1. Country

const obj1 = { name: 'Kratos', City: 'NY', Country: 'America'}

const {Country} = obj1

console.log(Country);

// 2.John and Wick

const obj2 = { name: {fname: 'John', lname: 'Wick'}, city: 'Toronto'}

const {name:{fname,lname}} = obj2

console.log(fname,lname);

// 3.Valar Morghulis and Spartan

const obj3 = {person1: { name: 'No One', address: { city: 'Bravos', slogan: 'Valar Morghulis'}}, person2: {name:'Spartan',
address: {city: 'SpartanCity', slogan: 'Ahoooo'}}};

const {person1:{address:{slogan}},person2:{name}} = obj3;

console.log(slogan,name);

// 4. Alias

const obj4 = {elements: { water : 'Sea', earth: 'Rock', air: 'Oxygen'}}

const {elements:{'water':Sea,'earth':Earth,'air':Rock}} = obj4

console.log(Sea,Earth,Rock);

// 5. destr 1

const arr = [1,'c', 8]

const[a] = arr

console.log(a)

// 6. destr 5

const arr1 = [1,2,3,4,5];

const [,,,,res] = arr1

console.log(res)

// 7. destr d
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const[,,,result] = arr2
console.log(result)
//8. destr targareyan and starks
const arr3 = [['Targareyan'], ['Starks'], ['Greyjoy'], ['Arryn']]; 
const [[tar],[sta]] = arr3
console.log(tar,sta)

// 9.destr celin
const arr4 = [{finame: 'Celin'}, {finame: 'George'}];
const [{finame}] = arr4
console.log(finame)

// 10.alias
const arr5 = [{firstName: 'Chandler'}, {lastName: 'Bing'}];
const [{'firstName':firname},{'lastName':lasname}] = arr5

console.log(firname,lasname)


// 11. destructure 'Elija', 'Klaus' and 'Rebecca' as elder, middle, younger
const obj = {originals: ['Elija', 'Jade', 'Walter White', 'Daemon', 'Klaus', 'Rebecca']};

const {originals:[i,,,,j,k]} = obj
console.log("Elder:",i)
console.log("Middle:",j)
console.log("Younger:",k)

//destructure 'Elina' and 'Caroline'
const obj6 = [{wolfies: ['Hayley', 'Elina', 'Rafael', 'Aiden']}, {vampires: ['Salvatore',
'Caroline']}];

const [{wolfies:[,val]},{vampires:[,ans]}] = obj6

console.log(val,ans)