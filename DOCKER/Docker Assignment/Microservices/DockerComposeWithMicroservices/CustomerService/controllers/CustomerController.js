const dataSource = require("../config/config");


const saveCustomer = async (req, res) => {
    const customerRepo = dataSource.getRepository("Customer");
    const customerSave = customerRepo.save(req.body);
    res.json(customerSave);
}

const getCustomer = async (req, res) => {
    const customerRepo = dataSource.getRepository("Customer");
    const customer = await customerRepo.findOne({ where: { customerId: req.params.id } });

    if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
    }

    res.json(customer);
}

const updateCustomer = async (req, res) => {
    const customerRepo = dataSource.getRepository("Customer");
    const customer = await customerRepo.findOne({ where: { customerId: req.params.id } });

    if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
    }

    customer.customerName = req.body.name;
    customer.email = req.body.email;

    await customerRepo.save(customer);

    res.json(customer);
}

const deleteCustomer = async (req, res) => {
    const customerRepo = dataSource.getRepository("Customer");
    const customerId = req.params.id;

    try {
        const customerToDelete = await customerRepo.findOne({
            where: {
                customerId: customerId,
            },
        })

        if (!customerToDelete) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        await customerRepo.remove(customerToDelete);
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error("Error deleting customer:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    saveCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer
};