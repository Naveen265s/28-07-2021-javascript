class Person {
    constructor(name){
        this.Name = name;
    }
    details(){
        console.log("Name " + this.Name);
    }
}
class Employee extends Person {
    constructor(name, title){
        super(name);
        this.title = title;
    }
    details() {
        super.details();
        console.log("Title " + this.title);
    }
}

let obj = new Employee("Naveen", "Senior Engineer");

obj.details();