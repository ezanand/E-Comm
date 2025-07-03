const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/orders
// @desc get all orders (Admin Only)
// @access private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route PUT /api/admin/orders/:id
// @desc update order status
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id).populate("user" ,"name");
    if (orders) {
      orders.status = req.body.status || orders.status;
      orders.isDelivered =
        req.body.status === "Delivered" ? true : orders.isDelivered;
      orders.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : orders.deliveredAt;

      const updatedOrder = await orders.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json({ message: "Order removed" });
    } else {
      res.status(404).json({ message: "order not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
