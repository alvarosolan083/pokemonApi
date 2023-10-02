const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('¡Hola! Esto es el servidor de la PokeAPI.');
});

app.get('/pokemon/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = response.data;
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos del Pokémon.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
