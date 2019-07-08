let person = {
    name: 'Balázs',
    age: 32,
    location: 'Kleinarl'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)