function countVowels (str) {
  const vowels = 'aeiou';
  let count = 0
  if(str === "" || str ===" ") {
    return 0;
  }
  if (!isNaN(str)) {
    return `String cannot be a number`;
  }
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }


console.log(countVowels("Batman"));

module.exports = {
    countVowels
}
