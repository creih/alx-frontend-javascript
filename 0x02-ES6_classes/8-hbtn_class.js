export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Setter for size
    set size(newSize) {
      this._size = newSize;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    // Setter for location
    set location(newLocation) {
      this._location = newLocation;
    }
  
    // Override valueOf method for casting to a number
    valueOf() {
      return this._size;
    }
  
    // Override toString method for casting to a string
    toString() {
      return this._location;
    }
  }