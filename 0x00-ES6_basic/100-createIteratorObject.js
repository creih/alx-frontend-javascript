export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);
  
    function* employeeGenerator() {
      for (const employees of departments) {
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  
    return employeeGenerator();
  }