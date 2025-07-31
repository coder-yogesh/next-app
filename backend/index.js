const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const userRoutes = require('./routes/user.routes');
const noteRoutes = require('./routes/note.routes');

const app = express();

app.use(cors({ 
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Respond to GET /api with a backend running message
app.get('/api', (req, res) => {
  res.json({ message: 'Backend running' });
});

// Mount user routes
app.use('/api', userRoutes);
app.use('/api', noteRoutes);

const PORT = 4000;

sequelize.sync()
  .then(() => {
    console.log('Database synced!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to sync DB:', err);
  });
