import { Router } from 'express';
import { fighterService } from '../services/fighterService.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';
import {
  createFighterValid,
  updateFighterValid,
} from '../middlewares/fighter.validation.middleware.js';

const router = Router();

router.get('/fighters', (req, res) => {
  fighterService.getAllFighters()
    .then(fighters => res.json(fighters))
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

router.get('/fighters/:id', (req, res) => {
  fighterService.getFighterById(req.params.id)
    .then(fighter => {
      if (!fighter) {
        res.status(404).json({ error: true, message: 'Fighter not found' });
        return;
      }
      res.json(fighter);
    })
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

router.post('/fighters', createFighterValid, (req, res) => {
  fighterService.createFighter(req.body)
    .then(newFighter => res.status(201).json(newFighter))
    .catch(error => res.status(400).json({ error: true, message: error.message }));
});

router.put('/fighters/:id', updateFighterValid, (req, res) => {
  fighterService.updateFighter(req.params.id, req.body)
    .then(updatedFighter => res.json(updatedFighter))
    .catch(error => res.status(400).json({ error: true, message: error.message }));
});

router.delete('/fighters/:id', (req, res) => {
  fighterService.deleteFighter(req.params.id)
    .then(() => res.json({ success: true, message: 'Fighter deleted successfully' }))
    .catch(error => res.status(500).json({ error: true, message: error.message }));
});

export { router };

