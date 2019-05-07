const p = {

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

    pop: function(word) {
        let newWord = word.split('');
        newWord.splice(newWord.length - 1);
        return newWord.join('');
    },

    popFront: function(word) {
        let newWord = word.split('');
        newWord.splice(0, 1);
        return newWord.join('');
    },

    isPalindrome: function(word) {
        let newWord = word.toLowerCase().split('');
        let wordToCheck = Math.floor(newWord.length / 2);
        for (let i = 0; i <= wordToCheck; i++) {
            if (newWord[i] == newWord[newWord.length - i - 1]) {
                if (i == wordToCheck) {
                    return true;
                }
                continue;
            }
            break;
        }
        return false;
    },

    reverse: function(word) {
        let newWord = word.split('').reverse().join('');
        return newWord;
    },

    onlyVowels: function(string) {
        let newString = string.replace(/[^aeiou]/g, '');
        return newString;
    },

    onlyLetters: function (string) {
        let newString = string.replace(/[^a-zA-z]/g, '');
        return newString;
    },

    stripVowels: function(string) {
        let newString = string.replace(/[aeiou]/g, '');
        return newString;
    },

    onlyDigits: function (string) {
        let digitsOnly = string.replace(/[^\d]/g, '');
        return digitsOnly;
    },

    stripDigits: function (string) {
        let digitsOnly = string.replace(/[\d]/g, '');
        return digitsOnly;
    },

    stripWhiteSpace: function(string) {
        let newString = string.replace(/\s/g, '');
        return newString;
    }

}


module.exports = p;















