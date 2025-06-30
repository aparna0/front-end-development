class Employee_1{
    constructor(id){
        this.id = id;
    }
}

const emp1 = new Employee_1();

//------------adding extra properties------------------
emp1.name = "aparna";
console.log(emp1);

//------------extending another class------------------
class Employee_2 extends Employee_1{
    constructor(id, name, role){
        super(id);
        this.name = name;
        this.role = role;
    }
    setName(name){
        this.name = name;
    }
    setRole(role){
        this.role = role;
    }
    getName(){
        return this.name;
    }
    printObject(){
        return ("id: "+this.id+", name: "+this.name+", role: "+this.role);
    }
    //-------------- static method---------------
    static staticMethod(){
        console.log("this is static method");
    }
}

const emp2 = new Employee_2(1, "aparna", "QA");
console.log(emp2.getName());
emp2.setRole("Backend Developer");
console.log(emp2.printObject());
//------------- calling static method--------------
Employee_2.staticMethod();

/*
PS D:\Aparna\FrontEnd> node "d:\Aparna\FrontEnd\javascript\class11.js"
Employee_1 { id: undefined, name: 'aparna' }
aparna
id: 1, name: aparna, role: Backend Developer
this is static method
*/
