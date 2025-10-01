// javascript
class User {
  constructor() {
    this.name = "Max";
  }
}

// typescript
class User2 {
  name = "Max";
}

// typescript
class User3 {
  name: string;
  age: string;

  constructor(n: string, a: string) {
    this.name = n;
    this.age = a;
  }
}

// javascript
class User4 {
  constructor(n: string, a: string) {
    this.name = n;
    this.age = a;
  }
}

// typescript
class User5 {
  constructor(public name: string, public age = 39) {}
}
