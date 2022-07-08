import { Router, Request, Response } from "express";
import User from "../models/user";

const router = Router();

router.post("/users", async (req: Request, res: Response) => {
    try {
        let user = await new User(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (error: any) {
        res.status(400).send(error?.message);
    }
});

router.get("/users", async (req: Request, res: Response) => {
    try {
        let user = await User.findById(req.body.id);
        res.status(200).send(user);
    } catch (error: any) {
        res.status(400).send(error?.message);
    }
});

// router.patch("/users", async (req: Request, res: Response) => {
    
// });

// router.delete("/users", async (req: Request, res: Response) => {
    
// });

export default router;