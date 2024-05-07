const express = require('express');
const app = express();
app.use(express.json());

const activosRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Routers\\activos');
const responsablesRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Routers\\responsables');
const ubicacionesRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Routers\\ubicaciones');

app.use('/activos', activosRouter);
app.use('/responsables', responsablesRouter);
app.use('/ubicaciones', ubicacionesRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
