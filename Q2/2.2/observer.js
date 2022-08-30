var Observable = require("./observable.js");

const sayHi = () => console.log("Hi");
const sayMyText = text => console.log(text);
const sayBye = () => console.log("Bye");

var myObserver = new Observable();
myObserver.subscribe(sayHi);
myObserver.subscribe(sayMyText);
myObserver.subscribe(sayBye);

myObserver.notify("Ceci est un message personalisé");