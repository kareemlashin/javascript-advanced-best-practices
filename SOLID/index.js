/* 
S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle
*/
// S — Single responsibility principle
class TodoList {
    constructor() {
        this.items = []
    }

    addItem(text) {
        this.items.push(text)
    }

    removeItem(index) {
        this.items = items.splice(index, 1)
    }

    toString() {
        return this.items.toString()
    }

    save(filename) {
        fs.writeFileSync(filename, this.toString())
    }

    load(filename) {
        // Some implementation
    }
}

// O — Open closed principle

class Coder {
    constructor(fullName, language, hobby, education, workplace, position) {
        this.fullName = fullName
        this.language = language
        this.hobby = hobby
        this.education = education
        this.workplace = workplace
        this.position = position
    }
}

class CoderFilter {
    filterByName(coders, fullName) {
        return coders.filter(coder => coder.fullName === fullName)
    }

    filterBySize(coders, language) {
        return coders.filter(coder => coder.language === language)
    }

    filterByHobby(coders, hobby) {
        return coders.filter(coder => coder.hobby === hobby)
    }
}

// L — Liskov substitution principle
class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get width() {
        return this._width
    }
    get height() {
        return this._height
    }

    set width(value) {
        this._width = value
    }
    set height(value) {
        this._height = value
    }

    getArea() {
        return this._width * this._height
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }
}
// I — Interface segregation principle
class Phone {
    constructor() {
        if (this.constructor.name === 'Phone')
            throw new Error('Phone class is absctract')
    }

    call(number) {}

    takePhoto() {}

    connectToWifi() {}
}
class IPhone extends Phone {
    call(number) {
        // Implementation
    }

    takePhoto() {
        // Implementation
    }

    connectToWifi() {
        // Implementation
    }
}
// D — Dependency Inversion principle
class FileSystem {
    writeToFile(data) {
      // Implementation
    }
  }
  
  class ExternalDB {
    writeToDatabase(data) {
      // Implementation
    }
  }
  
  class LocalPersistance {
    push(data) {
      // Implementation
    }
  }
  
  class PersistanceManager {
    saveData(db, data) {
      if (db instanceof FileSystem) {
        db.writeToFile(data)
      }
  
      if (db instanceof ExternalDB) {
        db.writeToDatabase(data)
      }
  
      if (db instanceof LocalPersistance) {
        db.push(data)
      }
    }
  }