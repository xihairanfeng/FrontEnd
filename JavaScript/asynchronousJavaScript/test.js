function sayHi(name) {
  console.log('Hello ' + name + '!');
}

let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');

clearTimeout(myGreeting);