// Your code goes here
const firstjs = document.querySelector('.intro img');

firstjs.addEventListener('mouseover', (e) => {
    firstjs.style.border = "4px solid red";
    console.log('hgjjknkjsdf');
});

//second addeventlistener
const secondjs = document.querySelector('body')

secondjs.addEventListener('keydown', (e) => {
    secondjs.style.backgroundColor = 'grey';
});

//third addEventListener
const thirdjs = document.querySelector('.intro p')

thirdjs.addEventListener('click', (e) => {
    thirdjs.style.fontSize = '24px';
});

//fourth addEventListener
const fourthjs = document.querySelector('p')

fourthjs.addEventListener(`dblclick` , (e) => {
    fourthjs.style.border = '3px solid purple';
    console.log('asdf')
});

//fifth addEventListener
const fifthjs = document.querySelector('.img-content')

fifthjs.addEventListener('mouseleave', (e) => {
    fifthjs.style.display = 'none';
    console.log('ghfdj');
})

//sixth addEventListener
const sixthjs = document.querySelector('.img-fluid')

sixthjs.addEventListener('mouseover', (e) => {
    sixthjs.src = 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    console.log('erd');
})

//seventh addEventListener