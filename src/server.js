const app = require("./app");
const doteenv = require("dotenv");
doteenv.config();


app.listen(8080, () => console.log("servidor rodando na porta 8080"));
