const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/gasto", (req, res) => {

  const sql = "SELECT * FROM gasto";

  db.query(sql, (error, result) => {

    if (error) {
      res.status(500).json(error);
    } else {
      res.json(result);
    }

  });

});

app.post("/gasto", (req, res) => {

  const { categoria, monto, fecha } = req.body;

  const sql = `
    INSERT INTO gasto(categoria, monto, fecha)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [categoria, monto, fecha],
    (error, result) => {

      if (error) {
        res.status(500).json(error);
      } else {
        res.json({
          mensaje: "Gasto guardado"
        });
      }

    }
  );

});

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});