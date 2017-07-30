function objectValues(object) {
    var dataArray = [];
    for (key in object) {
        dataArray.push(object[key]);
    }
    return dataArray;
}

function keysToString(object) {
    var string = "";
    for (key in object) {
        string += key + " ";
    }
    string = string.slice(0, -1);
//    console.log(string);
    return string;
}

// function keysToString(object) {
//     return Object.keys(object).join(' ');
// } this is a much more elegant solution but it's not mine :(

function valuesToString(object) {
    var string = "";
    for (key in object) {
        if (typeof(object[key]) === 'string')
        string += object[key] + " ";
    }
    string = string.slice(0, -1);
    console.log(string);
    return string;
}

function arrayOrObject(check) {
    if (Array.isArray(check)) {
        return "array";
    }   else 
    return "object";
}

function capitalizeWord(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function capitalizeAllWords(string) {
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(" ");
}

function welcomeMessage(object) {
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return "Welcome " + object.name + "!";
}

function profileInfo(object) {
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    object.species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    return object.name + " is a " + object.species;
}

function maybeNoises(object) {
    if (object.noises && object.noises.length > 1) {
        return object.noises.join(" ");
    } else
    return "there are no noises";
}

function hasWord(string, word) {
    if (string.search(word) > -1) {
        return true;
    } else return false;
}

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

function isFriend(name, object) {
    if (object.friends) {
        for (i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        } 
    } return false;
}

function nonFriends(name, people) {
    var nonFriends = [];
    for (var i = 0; i < people.length; i++) {
        if (name !== people[i].name) {
            var check = false
            for (var l = 0; l < people[i].friends.length; l++) {
                if (name === people[i].friends[l])
                    check = true;
            }   if (check === false) {
                    nonFriends.push(people[i].name);
                }
        }
    } 
    return nonFriends;
}

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++)
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
}

function dedup(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) { 
            array.splice(i+1, 1);
            i-=1;
        }
    }
    return array;
}