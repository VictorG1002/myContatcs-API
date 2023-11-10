const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // show all registers

    const contatcs = await ContactsRepository.findAll();

    response.json(contatcs);
  }

  async show(request, response) {
    // get one register by id
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  store() {
    // create one register
  }

  update() {
    // update one register
  }

  async delete(request, response) {
    // delete one register

    const { id } = request.params;
    const contact = await ContactsRepository.findById(id)

   if (!contact) {
     return response.status(404).json({ error: 'User not found' });
   }

   await ContactsRepository.delete(id)
   response.sendStatus(204)
  }
}

module.exports = new ContactController();
