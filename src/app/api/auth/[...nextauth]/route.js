import user from "@/models/user";
import { connectMongoDB } from "@/utils/dbConn";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        await connectMongoDB();

        const person = await user.findOne({ email: credentials.email });

        if (!person || !person.password) {
          throw new Error("No user found");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          person.password
        );
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

				console.log(person)
        return person;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
