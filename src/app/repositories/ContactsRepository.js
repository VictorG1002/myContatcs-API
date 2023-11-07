const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Victor',
  email: 'vggaia@hotmail.com',
  phone: '82999222520',
  category: uuid(),
}];

class ContatcsRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContatcsRepository();
