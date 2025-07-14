const typeorm = require("typeorm");
const path = require("path");
require("dotenv").config();

const dataSource = new typeorm.DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "", //Your Username
    password: "", //Your Password
    database: "order_service_db",
    synchronize: true,
    logging : true,
    entities: [path.join(__dirname, "..", "models/**/*.js")],
});

module.exports = dataSource;
