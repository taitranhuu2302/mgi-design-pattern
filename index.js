// Module Pattern
console.log("🚀 ~ file: index.js:2 ~ Module Pattern")
let countModule = (() => {
  let count = 0;
  let log = function(funcName) {
    console.log(funcName, count);
  }
  return {
    increase: function() {
      count++;
      log("increase");
    },
    decrease: function() {
      count--;
      log("decrease");
    },
    reset: function() {
      count = 0;
      log("reset");
    }
  }
})();

// Usage:
countModule.increase(); // increase 1
countModule.increase(); // increase 2
countModule.decrease(); // increase 1
countModule.reset();    // reset 0


// Revealing Module Pattern
console.log("🚀 ~ file: index.js:31 ~ Revealing Module Pattern")
let countRevealingModule = (function(){
  let count = 0;
  let log = function(funcName) {
    console.log(funcName, count);
  }
  function increaseFunc() {
    count++;
    log("increaseRevealing");
  }
  function decreaseFunc() {
    count--;
    log("decreaseRevealing");
  }
  function resetFunc() {
    count = 0;
    log("resetRevealing");
  }
  return {
    increase: increaseFunc,
    decrease: decreaseFunc,
    reset: resetFunc
  }
})();

// Usage:
countRevealingModule.increase(); // increase 1
countRevealingModule.increase(); // increase 2
countRevealingModule.decrease(); // increase 1
countRevealingModule.reset();    // reset 0


// Observer Pattern
console.log("🚀 ~ file: index.js:63 ~ Observer Pattern")

class Observer {
  constructor() {
    this.subscribes = []
  }
  subscribe(fn) {
    this.subscribes.push(fn)
  }
  unsubscribe(fn) {
    this.subscribes = this.subscribes.filter(item => item !== fn)
  }
  broadcast(data) {
    for(let i = 0; i < this.subscribes.length; i++) {
      this.subscribes[i](data)
    }
  }
}

const observer = new Observer()

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello I Tran Huu Tai");

// Prototype Design Pattern
console.log("🚀 ~ file: index.js:95 ~ Prototype Design Pattern")

const car = {
  wheels: 4,

  start() {
    return 'started';
  }
}

function clone(obj) {
  return {...obj};  
}

const carClone = clone(car);

console.log(carClone.wheels); // 4
console.log(carClone.start()); // 'started'

// Singleton Design Pattern
console.log("🚀 ~ file: index.js:115 ~ Singleton Design Pattern")

const Singleton = (() => {
  let instance = null;

  const createInstance = () => {
    const obj = new Object("Im Tran Huu Tai")
    return obj
  }
  
  return {
    getInstance : () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log("🚀 ~ file: index.js:136 ~ instance1 === instance2:", instance1 === instance2)

// Factory Pattern
console.log("🚀 ~ file: index.js:141 ~ Factory Pattern")

const Laptop = function({ ram, hdd, name }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.name = name || "";
};

const Tablet = function({ ram, hdd, name, network }) {
  this.ram = ram || 0;
  this.hdd = hdd || 0;
  this.network = network || 0;
  this.name = name || "";
};

const GadgetFactory = ((props) => {
  let gadget = props;
  const createGadget = (type, attributes) => {
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  }

  return {
    createGadget
  }
})({ Laptop, Tablet })

const myLaptop = GadgetFactory.createGadget("Laptop", {
  ram: 8,
  ssd: 256,
  name: "Bab's MacBook Pro"
});
console.log("🚀 ~ file: index.js:173 ~ myLaptop:", myLaptop)
const myTablet = GadgetFactory.createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  name: "Bab's iPad",
  network: '4G'
});
console.log("🚀 ~ file: index.js:180 ~ myTablet:", myTablet)

// Decorator Pattern
console.log("🚀 ~ file: index.js:183 ~ Decorator Pattern")

class Pizza {
  constructor() {
    this.description = 'Pizza';
  }

  getDescription() {
    return this.description; 
  }

  getPrice() {
    return 5;
  }
}

class CheeseDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + ', phô mai';
  }

  getPrice() {
    return this.pizza.getPrice() + 1;
  }
}

class SausageDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + ", xúc xích";
  }
  
  getPrice() {
    return this.pizza.getPrice() + 1;
  }
}

// Sử dụng
let pizza = new Pizza();

pizza = new CheeseDecorator(pizza); 

pizza = new SausageDecorator(pizza);

console.log(pizza.getDescription()); // Pizza, phô mai, xúc xích
console.log(pizza.getPrice()); // 7

