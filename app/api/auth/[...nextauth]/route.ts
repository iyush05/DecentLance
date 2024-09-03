import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any): Promise<any> {
            const users = await prisma.user.findUnique({
                where: { email: credentials.email}
            })
            if(users) return users;
            return null;
        },
      })
  ],
  callbacks: {
    async redirect({url, baseUrl}) {
        return baseUrl + '/dashboard';
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }