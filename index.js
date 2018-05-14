const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens.push
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens.unshift
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  [...kittens, name]
  return [...kittens, name]
}