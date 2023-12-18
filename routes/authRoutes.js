import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    const { email, password } = req.body;

    authService
      .login(email, password)
      .then((user) => {
        if (user) {
          res.data = { user };
        } else {

          throw new Error("User not found");
        }
      })
      .catch((err) => {
        res.err = err;
      })
      .finally(() => {
        next();
      });
  },
  responseMiddleware
);

export { router };

