
# string-of-pearls    ![alt text](https://i.ibb.co/SNHDXvk/Webp-net-resizeimage-7.jpg)


An "all things strings" library to help your workflow and automate the boring stuff!

  

## Installation

Using npm:

```javascript

npm  install  string-of-pearls

```

In Node.js:

```javascript

var  p = require('string-of-pearls');

```

## Usage:
#### p.capWord()
capWord() takes in a word as an argument and returns the word capitalized.
```javascript
p.capWord(pearl) // => "Pearl"
```
#### p.capEveryWord()
capEveryWord() takes in a string as an argument and returns every word of the string Capitalized.
```javascript
p.capEveryWord("glenn miller, moonlight serenade") // => "Glenn Miller, MoonLight Serenade"
```

#### p.pop() 
p.pop() takes in a word as an argument and removes the last character of the word.
Arrays don't get to have all the fun!
```javascript
p.pop("pearl") // =>"pear"
```
#### p.popFront() 
p.popFront() takes in a word as an argument and removes the first character of the word.
popFront() just feels more intuitive than shift() , just an opinion..
```javascript
p.pop("pearl") // =>"pear"
```
#### p.isPalindrome() 
p.isPalindrome() takes in a word as an argument and returns true if it is a palindrome, false if not. Capitalization is ignored.
```javascript
p.isPalindrome("kalimazoo") // => false
p.isPalindrome('kayak') // => true
```
#### p.reverse() 
p.reverse() takes in a word or string as an argument and reverses the letters.
```javascript
p.reverse("stardust") // => "tsudrats"
```
#### p.onlyVowels() 
p.onlyVowels() takes in a string and returns only the vowels of the string.
```javascript
p.onlyVowels("pearl") // => "ea"
p.onlyVowels('Tuxedo Junction') // => "ueouio"
```
#### p.onlyLetters() 
p.onlyLetters() takes in a string and returns only the letters of the string.
```javascript
p.onlyLetters("Pennsylvania 6-5000") // => "Pennsylvania"
```
#### p.stripVowels() 
p.stripVowels() takes in a string and returns only the consonants of the string.
```javascript
p.stripVowels("String of Pearls") // => "StrngfPrls"
```
#### p.onlyDigits() 
p.onlyDigits() takes in a string and returns only the digits of the string.
```javascript
p.onlyLetters("Pennsylvania 6-5000") // => "6500"
```
#### p.stripDigits() 
p.onlyDigits() takes in a string and returns the string without digits.
```javascript
p.onlyLetters("abc123") // => "abc"
```
#### p.stripWhiteSpace() 
p.stripWhiteSpace() takes in a string and returns the string without white space.
```javascript
p.onlyLetters("abc123") // => "abc"
```
