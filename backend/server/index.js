const express = require("express");
const {port} = require("../config");
const routerIndex = require("../routes");
const app = express();

//app.use(cors())
app.use(express.json());
app.use("/masajes",routerIndex);

app.listen(port, ()=>{
    console.log(`Servidor iniciado en puerto ${port}`);
})