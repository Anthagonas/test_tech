const phoneBook = require("./phoneBook/phoneBook");

console.log(phoneBook);
phoneBook.add("test","0123456789");
phoneBook.add("testing","0123456789");
console.log(phoneBook.findByName("test"));
console.log(phoneBook.findUsersByPhone("9876543210"));
phoneBook.add("test","9876543210");
console.log(phoneBook.findUsersByPhone("9876543210"));