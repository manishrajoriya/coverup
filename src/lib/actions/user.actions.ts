import {PrismaClient} from "@prisma/client"

declare type CreateUserPrams = {
//     clerkId     String
// email       String
// username    String
// photo       String
// firstname   String
// lastname    String
clerkId: string;
email: string;
username: string;
photo: string;
firstname: string | null
lastname: string | null;
}
const prisma = new PrismaClient()

export async function createUser(user:CreateUserPrams){
      const newUser = await prisma.user.create({
        data: user,
      })
}


