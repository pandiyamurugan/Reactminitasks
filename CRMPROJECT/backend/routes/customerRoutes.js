const router = require("express").Router()
const controller = require("../controllers/customerController")

router.get("/",controller.getCustomers)
router.post("/",controller.createCustomer)
router.put("/:id",controller.updateCustomer)
router.delete("/:id",controller.deleteCustomer)

module.exports = router