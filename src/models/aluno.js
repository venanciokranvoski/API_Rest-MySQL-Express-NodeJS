import  Sequelize, {Model} from 'sequelize';

export default class User extends Model {
    static init(sequelize) {
      super.init({
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT
      }, {
        Sequelize
      })
    }
}
