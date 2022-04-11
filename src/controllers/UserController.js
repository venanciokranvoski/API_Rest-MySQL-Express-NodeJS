import User from '../models/users'


// Store
class UserControle {
    async store(req, res) {
      try {
        const novoUser = await User.create(req.body);
          return res.json(novoUser);
      } catch (e) {
          return res.status(400).json({
       errors :  e.errors.map((err) => err.message),
      });
      }

    }

    // index
    async index(req, res) {
      try {
        const users = await User.findAll({attributes: ['id', 'nome', 'email']});
        return res.json(users);
      } catch (e) {
        return res.status(400).json({
          errors :  e.errors.map((err) => err.message),
      });
    }

    }



    // SHOW
    async show(req, res) {
      try {
        const users = await User.findByPk(req.params.id);
        return res.json(users);
      }catch (e) {
        return res.status(400).json({
          errors :  e.errors.map((err) => err.message),
      });
    }

    }



    // Update   //
    async update(req, res) {
      try {
         if(!req.params.id) {
           return res.status(400).json({
             errors: ['ID nao Enviado!!!'],
           })
         }// preciso de um ID
        const users = await User.findByPk(req.params.id);

        if(!users) { //  se o usuario existe  nao
          return res.status(400).json({
            errors: ['Usuario nao existe! ']
          });
        }

        const newdata = await users.update(req.body);
          return res.json(newdata);
      }catch (e) {
        return res.status(400).json({
          errors :  e.errors.map((err) => err.message),
      });
    }

    }




    //Delete
    async delete(req, res) {
      try {
         if(!req.params.id) {
           return res.status(400).json({
             errors: ['ID nao Enviado!!!'],
           })
         }// preciso de um ID
        const users = await User.findByPk(req.params.id);

        if(!users) { //  se o usuario existe  nao
          return res.status(400).json({
            errors: ['Usuario nao existe! ']
          });
        }

        await users.destroy();
          return res.json(users);
      }catch (e) {
        return res.status(400).json({
          errors :  e.errors.map((err) => err.message),
      });
    }

    }

}




export default new UserControle();
