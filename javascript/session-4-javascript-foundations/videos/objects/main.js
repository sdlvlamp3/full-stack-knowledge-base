const hero = {
  name: 'Bruce Wayne',
  alias: 'Batman',
  catchphrase: 'To the Batcave!',
  speak: function() {
    return 'Attention ' + this.catchphrase;
  },
  attack: function (sound) {
    return `(punches bad guy) ${sound}`;
  }
};

//Access a property
const thingToLookFor = 'alias';

console.log(hero.name); //Bruce Wayne
console.log(hero['name']); //Bruce Wayne
console.log(hero[thingToLookFor]); // Batman

//access a method (functions)

console.log(hero.speak());
console.log(hero.attack('POWWWWWWW'));