let pets = [
    {name: 'Moo', age: 2, species: 'guineapig'},
    {name: 'Rex', age: 1, species: 'dog'}, 
    {name: 'Charles', age: 3, species: 'guineapig'},
    {name: 'Jordan', age: 4, species: 'guineapig'},
    {name: 'Alex', age: 3, species: 'guineapig'}
]

function showPets() {
    // for .. of loop to go through the array one by one
    for (let pet of pets) {
    alert(pet.name)
    }
}

function addPet(){ 
 // get details of new pet 
    let name = prompt('What is your pets name?')
    let age = prompt('What is ' + name + "'s age?")
    let species = prompt("What species is " + name + '?')

 // create a pet object with the details
    let pet = {
        name: name,
        age: age,
        species: species,
    }

 // add a pet object to pets array
    pets.push(pet)
}

function removePet() {
 // output the names of each pet
 let index = 0
 for (let pet of pets) {
    alert(index + ": " + pet.name)
    index = index + 1
 } 

 // get the index of the pet to remove
 let indextoRemove = prompt('Which pet would you like to remove?')

 // remove the pet at the index
 pets.splice(indextoRemove, 1)
}

function searchPet() {
 // get the name of the pet to search for
 let petToSearchFor = prompt('What is the name of the pet you want to find?')

 // create a variable to store whether we found it or not (haven't yet)
 let searchResult = false

 // check each pet's name to see if it's the pet we're looking for, update the result if it is
 for (let pet of pets) {
    if (pet.name == petToSearchFor) {
        searchResult = true
    }
}

 // output whether the search found the pet or not
 if (searchresult == true) {
    alert('Found the pet!')
 } else {
    alert('Pet not found.')
 }

}