//Step 1
class Employee{
    constructor(name, department){
    this.name = name;
    this.department= department;
    }
    describe(){
        return `Hello ${this.name}!`;
    }
}