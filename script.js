let pets = [
    {name: 'Moo', age: 2, species: 'guineapig'},
    {name: 'Rex', age: 1, species: 'dog'}, 
    {name: 'Charles', age: 3, species: 'guineapig'},
    {name: 'Jordan', age: 4, species: 'guineapig'},
    {name: 'Alex', age: 3, species: 'guineapig'}
]

function petName(){ 
    let name = prompt('What is your pets name?')
    let age = prompt('What is ' + name + "'s age?")
    let species = prompt("What species is " + name + '?')

    let pet = {
        name: name,
        age: age,
        species: species,
    }

    pets.push(pet)
}

function showPets() {
    // for .. of loop to go through the array one by one
    for (let currentPet of pets)
    alert(pet.name)

}

function removePet(){
}
 


function findPet(){

}