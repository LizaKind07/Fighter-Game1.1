import { fighterRepository } from '../repositories/fighterRepository.js';

class FighterService {
  getAllFighters() {
    return fighterRepository.getAll();
  }

  getFighterById(id) {
    return fighterRepository.getById(id);
  }

  createFighter(fighterData) {
    return fighterRepository.create(fighterData);
  }

  updateFighter(id, fighterData) {
    return fighterRepository.update(id, fighterData);
  }

  deleteFighter(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };
