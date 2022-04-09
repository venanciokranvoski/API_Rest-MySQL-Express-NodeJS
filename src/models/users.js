import  Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
      super.init({
        nome:{
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
          len: {
            args: [3, 255],
              msg: 'Campo nome Deve entrar entre 3 a 25 caracteres',
            },
          }
        },
        email:{
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail : {
            args: [3, 255],
              msg: 'Campo Email invalido !!!'
            },
          }
        },
        password_hash:{
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password:{
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
          len: {
            args: [6, 50],
              msg: 'Senha deve ter entre 6 a 50 caracteres',
            },
          },
        },
      }, {
        sequelize,
      });

      // adiciondo HOOKS
      this.addHook('beforeSave', async user => {
         user.password_hash = await bcrypt.hash(user.password, 8)
      })


      return this;
    }
}
