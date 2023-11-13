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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((user) => user.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }

  create({name , email , phone, category_id}) {
    return new Promise((resolve) => {
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
      category_id,
    }

    contacts.push(newContact)

    resolve(newContact)
    })
  }


  update(id ,{ name , email , phone, category_id }) {
    return new Promise((resolve) => {

    const updatedContact = {
      id: id,
      name,
      email,
      phone,
      category_id,
    }

    contacts = contacts.map((contact) => (
      contact.id === id ? updatedContact : contact
    ))


    resolve(updatedContact)
    })
  }
}

module.exports = new ContatcsRepository();
