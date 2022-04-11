import User from "../models/users";
import jwt from 'jsonwebtoken'

class TokenController {
  async store(req, res) {
    const {email= '', password= '' } = req.body;

    if(!email || !password ){
      return res.status(401).json({
        errors: ['Credenciais invalidas']
      });
    }

    const user = await User.findOne({where: {email } });

    if(!user){
      return res.status(401).json({
        errors: [' Usuario nao existe! '],
      });
    }

    if(!(await user.passwordVAlid(password))) {
      return res.status(401).json({
        errors: ['senha invalida'],
      })
    }

    const {id} = user;
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPITARION,
    });

    return req.json({token});






  }
}
export default new TokenController();
