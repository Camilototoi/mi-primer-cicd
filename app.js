// app.js — Mini API web con Express
const express = require('express');
const app = express();

// Función de suma — esto es lo que testeamos
function sumar(a, b) {
  return a + b;
}

// Render asigna el puerto dinámicamente via variable de entorno
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi Pipeline CI/CD');
});

// Ruta que suma dos números de la URL
app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

// El servidor solo arranca si ejecutamos este archivo directamente
// (no cuando Jest lo importa para testear)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

// Exportamos para los tests
module.exports = { sumar, app };
