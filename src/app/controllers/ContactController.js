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

  async store(request, response) {
    // create one register
    const { name , email , phone, category_id} = request.body

    if(!name) {
      response.status(400).json({error: 'Name is required'})
    }

    const contactExists = await ContactsRepository.findByEmail(email)

    if (contactExists) {
      response.status(400).json({error: 'This e-mail is already been taken'})
    }

    const contact = await ContactsRepository.create({
      name , email , phone, category_id
    })

    response.json(contact)
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
