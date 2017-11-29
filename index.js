var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var e = kittens.pop();
  return e;
}

function destructivelyRemoveFirstKitten() {
  var e = kittens.shift();
  return e;
}

function appendKitten(name) {
  return [...kittens, name]
}
