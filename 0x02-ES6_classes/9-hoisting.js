class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    // Getter for year
    get year() {
      return this._year;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  }
  
  // StudentHolberton.js
  class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    // Getter for fullName
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Getter for holbertonClass
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    // Getter for fullStudentDescription
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Export classes for use in other modules if needed
  export { HolbertonClass, StudentHolberton };