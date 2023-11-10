const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Victor",
    email: "vggaia@hotmail.com",
    phone: "82999222520",
    category: v4(),
  },
  {
    id: v4(),
    name: "VMaria",
    email: "zzz@hotmail.com",
    phone: "82999222520",
    category: v4(),
  },
];

class ContatcsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((user) => user.id === id));
    });
  }


  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }
}

module.exports = new ContatcsRepository();
