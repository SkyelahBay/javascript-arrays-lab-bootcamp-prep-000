const app = "I don't do much.";

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens];
}
function removeLastKitten(name){
  let newArray = kittens.slice(0, (kittens.length -1));
  return newArray;
}
function removeFirstKitten(name){
  let newArray = kittens.slice(1);
  return newArray;
}