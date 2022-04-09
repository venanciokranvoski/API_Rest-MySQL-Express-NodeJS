class HomeControle {
    index(req, res) {
      res.json({
        tudoCerto: true,
      })
    }
}

export default new HomeControle();
