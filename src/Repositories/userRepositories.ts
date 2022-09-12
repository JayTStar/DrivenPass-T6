import { Users } from "@prisma/client";
import { prisma } from "../Config/db.js"

export type UserData = Omit<Users, "id">;

export async function findByEmail(email: string){
    const user = await prisma.users.findFirst({
        where: {email}
    });

    return user;
}

export async function create(user:UserData) {
    await prisma.users.create({
        data: user,
    });
}

export async function getById(id: number) {
    const user = await prisma.users.findUnique({
        where: { id },
    });

    return user;
}

export async function getInfo(id: number) {
    const userInfo = await prisma.users.findFirst({
        where: { id },
        include: {
            cards: true,
            credentials: true,
            documents: true,
            secureNotes: true,
            wifi: true,
        },
    });

    return userInfo;
}