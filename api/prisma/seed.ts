import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      name: "Administrador",
	    username: "admin",
	    password: "$2a$08$Tvzud7pUEApekx/LK57zW.Tq36b2yYJSxDcbe6Z8VlC3GDRaCpwVa", // Admin@123
    },
  })
  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })