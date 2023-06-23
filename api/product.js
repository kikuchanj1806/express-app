const express = require("express");
const router = express.Router();
const congraModel = require("../src/model/api.model");

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    const congra = await congraModel.find();
    res.json({
      status: 200,
      message: congra,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
