// dependencies
const Employee = require('../lib/employee');


//initialize testing 

describe("Employee", () => {
    describe("Initialization", () => {
      // object should return and empty string
      it("should initiate an object", () => {
        const obj = new Employee();
        // We expect 'result' to equal object 
        expect(typeof(obj)).toEqual("object");
      });
    });

    //create test for name object
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("William");
        expect(obj.name).toEqual("William");
      });
    });
    //create test for id object
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("William",12);
        expect(obj.id).toEqual(12);
      });
    });
    //create test for email object
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee("William",12, "William@gmail.com");
        expect(obj.email).toEqual("William@gmail.com");
      });
    });
    //create test for getName method
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("William");
        expect(obj.getName()).toEqual("William");
      });
    });
    //create test for getId method
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("William", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
    //create test for getEmail method
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("William", 12, "William@gmail.com");
        expect(obj.getEmail()).toEqual("William@gmail.com");
      });
    });
    //create test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";//must define role
        const obj = new Employee("William", 12, "William@gmail.com");
        expect(obj.getRole()).toEqual(role);
      });
    });
});