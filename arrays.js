let arr1 = [1,12,3,4,5,6,7,678,6,99,8]
let arr2 = new Array()
const students = 'adebare kosi aisha'.split(' ')



const fewStds = ['kehind','philips','ebade']

students.push('joshua', ...fewStds)

students.unshift('chukwuemeka', 'darlington')

students.shift()
students.pop()
students.pop()

students.splice(2,0,'promise')

students.splice(3,2,...['efosa','franc','habeeb','aramide'])

students.splice(4,1)

students.sort((a,b) => b.length - a.lenght)

students.reverse()

console.log(students)

arr1.sort((x,y)=>y-x)

const students2 = students.slice()

students.push('john')

const students3 = [...students]

students3.pop()

const students4 = students.slice(0,5)


const eStd = students.find(name => name.endsWith('e'))

const eStds = students.filter(name => name.endsWith('e'))

const containsAB = students.filter(name => name.includes('a') && name.includes('b'))

function addTen(x){
    return x + 10
}
 
function TS(x){
    return x >= 30 && x <= 70
}

const upper = student => student.replace(student[0], student[0].toUpperCase())

function uppers(student){
    return student.replace(student[0], student[0].toUpperCase())
}
function sortData(a,b){
    return b-a 
}

const toUpper = students.map(upper)




console.log(arr1)