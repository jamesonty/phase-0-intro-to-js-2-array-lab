// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
let x ='Ralph';

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  return cats.concat(name);
}
appendCat("Broom");
console.log(cats)
function prependCat(name) {
    return [name, ...cats];

}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
  return cats.slice(1);
}