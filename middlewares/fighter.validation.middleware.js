import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  const { name, power, defense } = req.body;

  if (!name || !power || !defense) {
    return res.status(400).json({ error: true, message: "Missing required fields" });
  }

  if (isNaN(power) || isNaN(defense) || power < 1 || power > 100 || defense < 1 || defense > 10) {
    return res.status(400).json({ error: true, message: "Invalid power or defense format" });
  }


  next();
};

const updateFighterValid = (req, res, next) => {
  next();
};

export { createFighterValid, updateFighterValid };

