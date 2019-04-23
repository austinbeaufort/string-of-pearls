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


















