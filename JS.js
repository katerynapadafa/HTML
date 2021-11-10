const btnGenerate = document.getElementById('generate');
const btnReset = document.getElementById('reset');
const range = [];
const minInput = document.getElementById('minNumber');
const maxInput = document.getElementById('maxNumber');


const result = document.getElementById('result');
const result1 = document.getElementById('result1');
btnGenerate.addEventListener('click', checkNumbers);

function checkNumbers() {
    const minNumber = Number(minInput.value);
    const maxNumber = Number(maxInput.value);

    if (minNumber >= maxNumber) {
        return result.innerHTML = 'Invalid number';
    } else {
        let getRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        for (let i = minNumber; i <= maxNumber; i++) {
            if (!range.includes(getRandomNumber)) {
                range.push(getRandomNumber);
                result.innerHTML = `Generated number: ${getRandomNumber}`;
                break;
            }
        }
    }
    console.log(range)
    if (range.length === maxNumber) {
        result1.innerHTML = 'No random numbers left'
        btnGenerate.disabled = true
    }
}
btnReset.addEventListener('click', resetClick);

function resetClick() {
    result.innerHTML = 'Generated number'
    result1.innerHTML = ''
    minInput.value = '';
    maxInput.value = '';

}