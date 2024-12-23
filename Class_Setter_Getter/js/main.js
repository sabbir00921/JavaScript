class mern {
    // name="sabbir";
    // totalStudent= 29;
    // batchName= "MERN2404"
    students = ["John", "Alice", "Michael", "Emily", "David", "Sarah", "James", "Olivia", "Daniel", "Sophia"];
    constructor(Name, age, edu, expert) {
        this.name = Name
        this.age = age
        this.edu = edu
        this.expert = expert
    }

    details = function () {
        return (`${this.name} is mern developer. He is ${this.age} years old.`)
    }
    studentList = function () {
        const Slist = this.students.map((item) => {
            // console.log(item);
            return `${item} sir`
        })
        return Slist;
    }
    set adder(name){
        this.propertyName = name;
    }
    get getter(){
        return this.details();
    }


}
const myObj = new mern("Md. Sabbir", 28, "Bs.c", "JS");
console.log(myObj);
// console.log(myObj.details());
console.log(myObj.adder = "sabbir");
console.log(myObj.getter);
// console.log(myObj.studentList());

