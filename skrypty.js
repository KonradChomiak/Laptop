console.log(`zamknij ta polska pizde`)
const name = 'Konrad';
const age = 35;
console.log(name)
console.log(age)

console.log(`nazywam sie ${name} i mam ${age} lat`);

const testowe = document.querySelector('.testowe')

console.log(testowe.innerHTML = ' czesc')

testowe.innerHTML = '<strong>ELOOOOO</strong> testuje JS podmiana tekstu w js'

const paragraph = document.querySelectorAll('.paragraph')
console.log(paragraph[0])

if ('name' !== 'age') {console.log('dziala elegancko')}
else { console.log('nie dziala')
};

if (age < 20) {
    console.log('masz mniej niz 20 lat')
}

else if ((age >=20) && (age <= 30)){
    console.log('masz wiecej niz 20 lat ale mniej niz 30')
}

else { 
    console.log('jestes 31+')
}