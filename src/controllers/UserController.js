import User from '../models/users'

class UserControle {
    async store(req, res) {
      try {
        const novoUser = await User.create({
          nome: 'Maria',
          email: 'maria@gmail.com',
          password: '123456',
       });
       res.json(novoUser);
      } catch (e) {
      res.status(400).json('Deu um erro');
      }
    }
}
export default new UserControle();
