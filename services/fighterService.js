import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  getAllFighters() {
    return fighterRepository.getAll();
  }

  getFighterById(id) {
    return fighterRepository.getById(id);
  }

  createFighter(fighter) {
    return fighterRepository.create(fighter);
  }

  updateFighter(id, fighter) {
    return fighterRepository.update(id, fighter);
  }

  deleteFighter(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };

