// @ts-ignore
import express, {Request, Response} from "express";
// @ts-ignore
import {PrismaClient} from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

router.get(`/applications`, async (req: Request, res:Response) => {
    try{
        const apps = await prisma.applications.findMany();
        res.status(200).send({data: apps});
    }catch (error){
        return res.status(500).send({message: error})
    }finally{
        await prisma.$disconnect();
    }
})

export default router;