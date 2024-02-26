// @ts-ignore
import express, {Request, Response} from "express";
// @ts-ignore
import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();


const checkIfExists = async (field: string, value: string) => {
    const result = await prisma.users.findMany({
        where: {
            [field]: value
        }
    });
    return result.length > 0;
};

const checkPassword = (password: string) => {
    return password.length >= 7 && /[A-Z]/.test(password);
}

router.post(`/signup`, async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if(username && email && password){
        try{
            if(await checkIfExists("username", username)) {
                return res.status(409).send({message: "Username already exists"})
            }
            if(await checkIfExists("email", email)) {
                return res.status(409).send({message: "The email address is already taken"})
            }
            if(!checkPassword(password)) return res.status(400).send({
                message: "The password must contain at least 7 characters and one capital"
            })
            bcrypt.hash(password, 10, async (err: Error | undefined, hash: string) => {
                if(err) throw err;
                const newUsers = await prisma.users.create({
                    data: {
                        username: username,
                        email: email,
                        password: hash
                    },
                })
                res.status(201).send({
                    data: newUsers
                })
            })
        } catch (error){
            return res.status(500).send({message: "An internal error has occurred on the server"})
        }finally {
            await prisma.$disconnect();
        }
    }else{
        return res.status(400).send(
            {message: "The server was unable to satisfy the request, information is missing"
            })
    }
})

router.post(`/signin`, async (req: Request, res: Response) => {
    const { nameEmail, password } = req.body;

    console.log(nameEmail, password)

    if(nameEmail && password){
        try{
            const userExist = await prisma.users.findMany({
                where: {
                    OR: [
                        {username: nameEmail},
                        {email: nameEmail}
                    ]
                }
            })
            if(userExist.length == 0) return res.status(400).send({message: "The users does not exist"});
            console.log(userExist[0].password);
            bcrypt.compare(password, userExist[0].password, (err: Error | undefined, isTheSame: boolean) => {
                if(err) throw err;
                if(isTheSame) return res.status(200).send({data: userExist});
                return  res.status(400).send({ message: "Incorrect password" })
            })
        }catch (error){
            return res.status(500).send({message: "An internal error has occurred on the server"})
        }finally {
            await prisma.$disconnect();
        }
    }else{
        return res.status(400).send(
            {message: "The server was unable to satisfy the request, information is missing"
            })
    }
})

export default router;