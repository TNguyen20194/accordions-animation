/* eslint-disable no-unused-vars */
// const clownHat = document.querySelector('.clown-hat')
// const clownHatColor = clownHat.getAttribute('data-color')
// const clownHatStripes = parseInt(clownHat.getAttribute('data-num-stripes'))

// clownHat.setAttribute('data-material', 'cloth');
// // const clownHatMaterial = clownHat.getAttribute('data-material')
// const clownHatMaterial = clownHat.dataset.material
// clownHat.dataset.material = 'Magical thread'
// clownHat.removeAttribute('data-material')

//1
const characters = document.querySelector('.characters');
//2
const humansDiv = characters.querySelector('.humans');
//3
const humans = humansDiv.querySelectorAll('li');
//4
const hobbitsDiv = characters.querySelector('.hobbits');
const hobbits = hobbitsDiv.children
//5
const hobbitMerry = hobbits[2];
//6
const elvesDiv = characters.querySelector('.elves');
//7
const elves = elvesDiv.children;
const glorfindel = elves[1];
//8
const elrond = glorfindel.nextElementSibling;
//9
const legolas = glorfindel.previousElementSibling;
//10
const nazgul = document.querySelector('.enemies').children[1];
const allCharacters = nazgul.closest('.characters')

console.log(nazgul)
console.log(allCharacters);