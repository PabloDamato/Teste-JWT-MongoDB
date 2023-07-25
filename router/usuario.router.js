const router = require("express").Router();
const usuario = require("../controller/usuario.controller.js");

router.get("/findAll", usuario.findAll);
router.get("/find/:nome", usuario.find);
router.post("/create", usuario.createUsuario);
router.put("/update/:nome", usuario.updateUsuario);
router.delete("/delete/:nome", usuario.deleteUsuario);

module.exports = router;