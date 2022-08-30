module.exports = class Observable {
    constructor() {
      this.observers = [];
    }  
    subscribe(callBack) {
      this.observers.push(callBack);
    }  
    unsubscribe(callBack) {
      this.observers = this.observers.filter(subscriber => subscriber !== callBack);
    }  
    notify(text) {
      this.observers.forEach(callBack => callBack(text));
    }
}