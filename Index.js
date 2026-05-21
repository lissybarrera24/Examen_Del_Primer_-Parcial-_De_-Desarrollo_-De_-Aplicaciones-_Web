const express = require('express');
const cors = require('cors');
const Gasto = require('./Modelos/Gasto');

const app = express();

app.use(express.json());
app.use(cors());


// TODOS LOS GASTOS
app.get('/gasto', async (req, res) => {
    try {
        const gastos = await Gasto.findAll();
        res.status(200).json(gastos);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error' });
    }
});


//  El POST GASTO
app.post('/gasto', async (req, res) => {
    try {
        console.log(req.body);

        await Gasto.create(req.body);

        res.status(200).json({ mensaje: 'Gasto agregado correctamente' });

    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error: ' + error });
    }
});


//  El PUT 
app.put('/gasto/:idgasto', async (req, res) => {
    try {

        const updated = await Gasto.update(req.body, {
            where: { idgasto: req.params.idgasto }
        });

        if (updated[0]) {
            res.status(200).json({ mensaje: 'Gasto actualizado correctamente' });
        } else {
            res.status(400).json({ mensaje: 'No se actualizó' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error: ' + error });
    }
});


// El DELETE
app.delete('/gasto/:idgasto', async (req, res) => {
    try {

        const deleted = await Gasto.destroy({
            where: { idgasto: req.params.idgasto },
        });

        if (deleted) {
            res.status(200).json({ mensaje: 'Gasto eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Gasto no encontrado' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar gasto: ' + error });
    }
});


//El SERVIDOR
app.listen(5000, () => {
    console.log('Aplicación ejecutando en puerto 5000');
});