class HomeController {
  static hello(req, res) {
    res.json({
      message: "hellooooo!"
    })
  }
}

module.exports = HomeController