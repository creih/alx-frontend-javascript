export default function iterateThroughObject(reportWithIterator) {
    // iterator to get all employee names
    const employees = [];
    for (const employee of reportWithIterator) {
      employees.push(employee);
    }
  
    return employees.join(' | ');
  }