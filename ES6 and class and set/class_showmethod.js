class student {
    constructor(sid, sname, sage, scity){
        this.sid = sid;
        this.sname = sname;
        this.sage = sage;
        this.scity = scity;
    }
    show(){
        console.log(`
            Id: ${this.sid}
            Name: ${this.sname}
            Age: ${this.sage}
            City: ${this.scity}
        `)
    }
}
//array of students
let students = [
    new student(1, "Naveen", 20, "chennai" ),
    new student(1, "Santhosh", 20, "Bangalore" ),
    new student(1, "Kumar", 20, "Hyd" ),
    new student(1, "Naveen", 20, "chennai" )
]

for (let stu of students){
    stu.show(); //method defined in student class
}