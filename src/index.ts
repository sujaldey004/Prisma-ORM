// npm init -y
// npx tsc --init
// npm install prisma typescript ts-node @types/node --save -dev
// npx prisma init
// npx prisma migrate dev --name { NAME } init
// npx prisma generate
/*       Now Its good to go       */


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertData(email:string, password:string, firstName:string, lastName:string){
    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            email:true,
            password:true
        }
    })
    console.log(res);
}

insertData("su0pandit@gmail.com", "12ka42ka1", "Sujal", "Dey");