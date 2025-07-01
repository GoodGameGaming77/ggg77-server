class AuthController {
  static register(req, res) {
    res.json({
      message: "register aman!"
    })
  }
  static async login(req, res) {
    // process login
    res.json({ message: "Login success" })
  }
}

module.exports = AuthController
