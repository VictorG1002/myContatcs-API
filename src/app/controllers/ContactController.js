class ContactController {
  index(request, response) {
    // show all registers

    response.send('Hello world');
  }

  show() {
    // get one register by id
  }

  store() {
    // create one register
  }

  update() {
    // update one register
  }

  delete() {
    // delete one register
  }
}

module.exports = new ContactController();
