import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

// 1. Grab the connection string from your .env
const connectionString = process.env.DATABASE_URL!

// 2. Initialize the Postgres Pool and Prisma Adapter
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// 3. Pass the adapter directly into the new Prisma 7 Client
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma