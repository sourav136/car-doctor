import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions ={
    session:{
        strategy: "jwt"
    },

    providers:[
        CredentialsProvider({
            name: "Credentials", 
            credentials:{
                email:{}, 
                password:{}
            },
            async authorize(credentials){
                const client = await clientPromise;
                const db = client.db("carDoctor");

                const user = await db.collection("users").findOne({
                    email:credentials.email
                });
                if (!user) throw new Error("User not found");
                if (user.password !== credentials.password) throw new Error("Invalid password");
                return {
                    id: user._id.toString(),
                    email: user.email, 
                    role: user.role, 
                    name: user.name
                }
            }
        })
    ], 
    callbacks:{
        async jwt({token, user}){
            if(user) token.role = user.role;
            return token;
        }, 
        async session({session, token}){
            session.user.role= token.role;
            return session;
        }
    },
    pages:{
        signIn:"/login"
    },
};

const handler = NextAuth(authOptions);
export{handler as GET, handler as POST};