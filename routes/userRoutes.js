import { Router } from 'express';
import { userService } from '../services/userService.js';
import {
  createUserValid,
  updateUserValid,
} from '../middlewares/user.validation.middleware.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';

const router = Router();

router.get('/users', (req, res) => {
  userService.getAllUsers()
    .then(users => res.json(users))
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

router.get('/users/:id', (req, res) => {
  userService.getUserById(req.params.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: true, message: 'User not found' });
        return;
      }
      res.json(user);
    })
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

router.post('/users', createUserValid, (req, res) => {
  userService.createUser(req.body)
    .then(newUser => res.status(201).json(newUser))
    .catch(error => res.status(400).json({ error: true, message: error.message }));
});

router.put('/users/:id', updateUserValid, (req, res) => {
  userService.updateUser(req.params.id, req.body)
    .then(updatedUser => res.json(updatedUser))
    .catch(error => res.status(400).json({ error: true, message: error.message }));
});

router.delete('/users/:id', (req, res) => {
  userService.deleteUser(req.params.id)
    .then(() => res.json({ success: true, message: 'User deleted successfully' }))
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

export { router };
