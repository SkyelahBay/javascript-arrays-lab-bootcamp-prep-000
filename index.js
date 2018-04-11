const app = "I don't do much.";

function destructivelyAppendKitten(arrayName, elementToAdd){
  arrayName.push(elementToAdd);
  return arrayName;
}
function destructivelyPrependKitten(arrayName, elementToAdd){
  arrayName.unshift(elementToAdd);
  return arrayName;
}
function destructivelyRemoveLastKitten(arrayName){
  arrayName.pop();
  return arrayName;
}
function destructivelyRemoveFirstKitten(arrayName){
  arrayName.shift();
  return arrayName;
}
function appendKitten(arrayName, elementToAdd){
  return [...arrayName, elementToAdd];
}
function prependKitten(arrayName, elementToAdd){
  return [elementToAdd, ...arrayName];
}
function removeLastKitten(arrayName){
  let newArray = arrayName.slice(0, arrayName.length);
  return newArray;
}
function removeFirstKitten(arrayName){
  let newArray = arrayName.slice(1);
  return newArray;
}