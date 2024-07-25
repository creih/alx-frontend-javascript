export default class Airport {
    constructor(name, code) {
      this._name = this._validateName(name);
      this._code = this._validateCode(code);
    }
  
    // Validate name
    _validateName(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      return name;
    }
  
    // Validate code
    _validateCode(code) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      return code;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      this._name = this._validateName(newName);
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Setter for code
    set code(newCode) {
      this._code = this._validateCode(newCode);
    }
  
    // Override toString method to return the airport code
    toString() {
      return this._code;
    }
  }
  