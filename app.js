// app.js — Mini API web con Express
const express = require('express');
const app = express();

// Función de suma — esto es lo que vamos a testear
 function sumar(a, b) {
  return a + b;
}

// DESPUÉS (roto — cambia solo esta línea):
// function sumar(a, b) {
//  return a * b;  // ← multiplicación en vez de suma 😈
//}

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi Pipeline CI/CD');
});

// Ruta que suma dos números de la URL
app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

// Exportamos la función para poder testearla
module.exports = { sumar, app };