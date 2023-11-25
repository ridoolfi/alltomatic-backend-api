const userModel = require('../models/userModel')

class Login {
    constructor(req, res) {
        this.req = req;
        this.res = res
    }

    async AuthUser(req, res) {
      const user = req.body;
      const exist = await this.#verification(user);
      if (!exist || exist.length === 0) {
        return res.status(400).json({ msg: "User not found!" });
      } else {
        return res.status(200).json(exist);
      }
    }
    async #verification(user) {
      return await userModel.authUser(user)
    }
  };

module.exports = {Login:Login}