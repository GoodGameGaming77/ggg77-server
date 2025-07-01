module.exports = class AuthController {
  static async login(req, res) {
    // process login
    res.json({ message: "Login success" })
  }
}