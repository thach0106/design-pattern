class User {
  firstName: string
  lastName: string
  email: string
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User('John', 'Doe', 'john@doe.com');
const user2 = new User('John2', 'Doe2', 'john@doe.com2');
