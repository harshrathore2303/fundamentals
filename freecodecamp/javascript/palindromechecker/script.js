const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

const isPalindrome = () => {
    let str = textInput.value;
    if (str.length === 0) {
        alert('Please input a value');
        return;
    }

    let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');

    if (cleanStr === reversedStr) {
        resultText.innerText = `${str} is a palindrome`;
    } else {
        resultText.innerText = `${str} is not a palindrome`;
    }
};

checkButton.addEventListener('click', isPalindrome);
