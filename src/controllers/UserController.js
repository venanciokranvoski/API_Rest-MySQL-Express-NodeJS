import User from '../models/users'

class UserControle {
    async index(req, res) {
      const novoUser = await User.create({
         nome: 'Maria',
         sobrenome: 'Maria',
         email: 'Venanciomissions@gmail.com',
         idade:24,
         peso: 98,
         Altura: 157,
      });
      res.json(novoUser)
    }
}

export default new UserControle();
