//Step 2
class Employee{
    constructor(name, department){
    this.name = name;
    this.department= department;
    }
    describe(){
        return `Hello ${this.name}! You look dashing today!`;
    }
}
//Step 3

class Manager extends Employee {
    constructor(name, department, teamSize)
    {
        super(name,department);
        this.teamSize= teamSize
    }
   describe()
   {
        return `Hello ${this.name}! You manage a team of ${this.teamSize} in the ${this.department} department!`;
    }
    
}

//Step 4

const emp1= new Employee ("Itadori Yuji", "Accounting");
console.log(emp1.describe())

const emp2= new Employee ("Megumi Fushiguro", "Accounting");
console.log(emp2.describe())

const emp3 =new Manager ("Satoru Gojo", "Accounting", 4);
console.log(emp3.describe())

//Step 5
class Company {
    constructor(){
this.employees = []
    }
addEmployee(employee)
{
    this.employees.push(employee)
}
listEmployees()
{
    this.employees.forEach(employee => console.log(employee.describe())) 
}
}
const company= new Company()
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
console.log(company.listEmployees());
