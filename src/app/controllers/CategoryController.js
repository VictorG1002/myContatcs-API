const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {

  async index (request, response) {
    return response.json({ ok: true });
  }


  async show (request, response) {

  }



  async store (request, response) {
    const { name } = request.body;
    
    
    return response.json({ ok: true });
  }



  async update (request, response) {

  }


  async delete ( ) {

  }


}



module.exports = new CategoryController();
