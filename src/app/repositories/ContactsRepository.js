const { v4 } = require("uuid");

const db = require('../database/index')

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts')

    return rows
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

  async create({name , email , phone, category_id}) {
    const [row] = await db.query(`INSERT INTO contacts(name , email , phone, category_id)
    VALUES($1, $2, $3, $4) RETURNING *`,
    [name, email, phone, category_id]);


    return row;
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
