/* const name      = prompt('What is your name?');*/
const username  = 'sdlvla';

//if                        Most common

/* if (name == 'Nick' || name == 'Sam') {
  alert('Hello!');
}

  else if (name == 'Holly'){
    console.log('this is Holly')
  }

  else{
    console.log('not nick');} */

//for loop

const dogsList  = document.querySelector('.dogs-list');
const dogs = [
  {name:  'Ozzie', type: 'terrier'},
  {name:  'Newo', type: 'mini-aussie'},
  {name:  'Maple', type: 'australian-shepherd'}
];

/* for (let i = 0; i < dogs.length; i++){
  //grab the dog
  const dog = dogs[i];

  const dogData = document.createElement('div');
  dogData.innerText = `${dog.name} is a ${dog.type}`;
  dogData.classList.add('jumbotron')
  dogsList.appendChild(dogData);
} */


//while loop

/* let i = 0;
while( i<dogs.length){

    //grab the dog
    const dog = dogs[i];

    const dogData = document.createElement('div');
    dogData.innerText = `${dog.name} is a ${dog.type}`;
    dogData.classList.add('jumbotron')
    dogsList.appendChild(dogData);
  
  
  i++;
} */


//do while loop

/* let i = 0;
do {
  
  const dog = dogs[i];
  const dogData = document.createElement('div');
  dogData.innerText = `${dog.name} is a ${dog.type}`;
  dogData.classList.add('jumbotron')
  dogsList.appendChild(dogData);

  i++;
} while (i < dogs.length); */

// for... of iterator

for (let dog of dogs){
  const dogData = document.createElement('div');
  dogData.innerText = `${dog.name} is a ${dog.type}`;
  dogData.classList.add('jumbotron')
  dogsList.appendChild(dogData);
}