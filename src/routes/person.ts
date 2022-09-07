import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello Person!" });
});

router.get("/:id", (req, res) => {
  res.send({ user: ("Hello " + req.params.id) });
});

export default router;