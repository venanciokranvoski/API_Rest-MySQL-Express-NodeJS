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
          },
        },
        email:{
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
          msg: 'Email ja existe!'
          },
          validate: {
            isEmail : {
            args: [3, 255],
              msg: 'Campo Email invalido !!!'
            },
          },
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
            args: [2, 50],
              msg: 'Senha deve ter entre 6 a 50 caracteres',
            },
          },
        },
      }, {
        sequelize,
      });

      // adiciondo HOOKS
      this.addHook('beforeSave', async (user) => {
        if(user.password) {
          user.password_hash = await bcrypt.hash(user.password, 4);
      }
        });

      return this;
    };

    passwordVAlid(){
      return bcrypt.compare(password, this.password_hash);
    }
}
