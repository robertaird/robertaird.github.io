/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].name.toLowerCase() === name.toLowerCase())
        return animals[i];
  } return null;    
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1, replacement);
            return animals;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1);
            return animals;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    if (animal.name && animal.species){
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return null;
            }
        } return animals.push(animal);
    }     
}

/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}