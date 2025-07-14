const dataSource = require("../config/config");

const saveOrder = async (req, res) => {
    const orderRepo = dataSource.getRepository("Order");
    const orderSave = orderRepo.save(req.body);
    res.json(orderSave);
}

const getOrder = async (req, res) => {
    const orderRepo = dataSource.getRepository("Order");
    const order = await orderRepo.findOne({ where: { orderId: req.params.id } });

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
}

const updateOrder = async (req, res) => {
    const orderRepo = dataSource.getRepository("Order");
    const order = await orderRepo.findOne({ where: { orderId: req.params.id } });

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    order.orderDate = req.body.orderDate;
    order.orderStatus = req.body.orderStatus;
    order.orderTotal = req.body.orderTotal;

    await orderRepo.save(order);

    res.json(order);
}

const deleteOrder = async (req, res) => {
    const orderRepo = dataSource.getRepository("Order");
    const orderId = req.params.id;

    try {
        const orderToDelete = await orderRepo.findOne({
            where: {
                orderId: orderId,
            },
        })

        if (!orderToDelete) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await orderRepo.remove(orderToDelete);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    saveOrder,
    getOrder,
    updateOrder,
    deleteOrder
};