let input = document.querySelector('input');
let button = document.querySelector('button');

function countVowel() {

    if (input.value == "") {
        console.log(alert(`Enter vowel first`));
        return;
    }

    let str = `${input.value}`
    let str1 = str.toLowerCase();
    let arr = str1.split('');
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        for (let j = 0; j < vowel.length; j++) {
            if(arr[i] == vowel[j]){
                count++;
                console.log(arr[i]);
            }
        }
    }
    let alert1 = alert(`There are ${count} vowel in your word`)
    console.log(alert1);
    
    input.value = '';
    return;
}
button.addEventListener('click', countVowel);




