const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Order",
    tableName: "order",
    columns: {
        orderId: {
            primary: true,
            type: "int",
            generated: true,
        },
        orderDate: {
            type: "date",
            nullable: true,
        },
        orderStatus: {
            type: "varchar",
            nullable: true,
        },
        orderTotal: {
            type: "float",
            nullable: true,
        },
        customerId: {
            type: "int",
            nullable: true,
        },
    },
});
