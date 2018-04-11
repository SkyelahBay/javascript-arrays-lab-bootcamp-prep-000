const app = "I don't do much.";
function resetKitten(){
  
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return arrayName;
}
function destructivelyPrependKitten(name){
  kittens.unshift(elementToAdd);
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
  return [...kittens, elementToAdd];
}
function prependKitten(name){
  return [elementToAdd, ...kittens];
}
function removeLastKitten(name){
  let newArray = kittens.slice(0, kittens.length);
  return newArray;
}
function removeFirstKitten(name){
  let newArray = kittens.slice(1);
  return newArray;
}