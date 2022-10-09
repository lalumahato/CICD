const router = require('express').Router();

const users = [{ id: 101, name: 'SMITH' }];

// List users
router.get('/users', (req, res) => {
  return res.send({ users });
});

// Add User
router.post('/users', (req, res) => {
  const { id, name } = req.body;
  users.push({ id, name });
  return res.status(201).json({ users });
});

module.exports = router;
