const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Customer",
    tableName: "customer",
    columns: {
        customerId: {
            primary: true,
            type: "int",
            generated: true,
        },
        customerName: {
            type: "varchar",
            nullable: true,
        },
        email: {
            type: "varchar",
            nullable: true,
        }
    },
});

