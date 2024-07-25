export default class Building {
    constructor(sqft) {
      this._sqft = this._validateSqft(sqft);
  
      if (new.target === Building) {
        throw new Error('Building is an abstract class and cannot be instantiated directly');
      }
    }
  
    // Validate sqft
    _validateSqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('Square footage must be a number');
      }
      return sqft;
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method that must be overridden in derived classes
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }