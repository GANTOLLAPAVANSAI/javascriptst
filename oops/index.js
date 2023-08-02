class User {
    #internal = true;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getAge() {
      return this.age;
    }
  
    getName() {
      return this.name;
    }
  
    printUser() {
      console.log(`${this.getName()} ${this.getAge()}`);
      console.log(this.#internal);
    }
  }
  
  class Admin extends User {
    constructor(name, age, isAdmin) {
      super(name, age);
      this.isAdmin = isAdmin;
    }
  
    printUser() {
      console.log(`${this.name} ${this.age} ${this.isAdmin}`);
    }
  }
  
  const kamal = new User("kamal", 22);
  const kishor = new User("kishor", 20);
  
  kamal.printUser();
  kishor.printUser();
  
  const pavan = new Admin("pavan", 19, true);
  
  pavan.isAdmin;
  pavan.name;
  pavan.age;
  pavan.getAge();
  pavan.getName();
  pavan.printUser();