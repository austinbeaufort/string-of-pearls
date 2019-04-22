// Welcome Aviator! 
// I've created the main object below with 2 starter functions to get us started. 
// Been running the functions with node.js to check if they work.
// Of course feel free to check your own however you want! :)

// To get started just add your functions below capEveryWord!
// *don't forget to add your name under authors in package.json!!


const stringHelpers = {

    capWord: function (word) {
        let firstLetter = word[0].toUpperCase();
        let capitalizedWord = word.replace(word[0], firstLetter);
        return capitalizedWord;
    },

    capEveryWord: function (string) {
        let stringArray = string.split(' ');
        let upperCaseArray = stringArray.map(word => {
            let firstLetter = word[0].toUpperCase();
            let capitalizedWord = word.replace(word[0], firstLetter);
            return capitalizedWord;
        });
        let capitalizedString = upperCaseArray.join(' ');
        return capitalizedString;
    },

}





// -------------------------run your test functions below this line --------------------------------------------
// I tend to just test mine with console.log() , but it's up to you of course!

console.log(stringHelpers.capWord('three blind mice'));


console.log(stringHelpers.capEveryWord('three blind mice.'));















