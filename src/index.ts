// npm init -y
// npx tsc --init
// npm install prisma typescript ts-node @types/node --save -dev
// npx prisma init
// npx prisma migrate dev --name { NAME } init
// npx prisma generate
/*       Now Its good to go       */


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Type Checking
interface UpdateData{
    firstName:string,
    lastName:string
}


/* Take Two args 
1. email
2. object of firstName and lastName
 */
async function updateUser(email : string, {
    firstName,
    lastName
} : UpdateData     /* It can be :any means without ts */){
   const res = await prisma.user.update({
        where:{email},
        data:{firstName, lastName},
        select:{firstName:true, lastName:true}
    })
    console.log(res)
}


updateUser("su0pandit@gmail.com", {firstName:"Your", lastName:"Sam"})