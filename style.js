const people = [
  {
    name: 'Bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'Anna',
    age: 21,
    position: 'designer'
  },
  {
    name: 'Sussy',
    age: 30,
    position: 'the boss'
  },
  {
    name: 'john',
    age: 26,
    position: 'intern'
  }
];

const result = document.querySelector('#result')

const names = people.map((person)=> `<h2>${person.name}</h2>`)

result.innerHTML = names.join('');

// const getAges = (person) => people.age * 2;


// const ages = people.map((person)=>{
//   return person.age
// })


// const newPeople = people.map((item)=> {
//   return {
//     firstName: item.name,
//     oldAge: item.age + 20
//   }
// })

// // console.log(newPeople)

// const position = people.map((item)=>{
//   return {
//     actualPosition: item.position
//   }
// })

// console.log(position)

