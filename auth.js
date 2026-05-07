import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcryptjs';

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
                if (!user) return Response.json({error: "User not found"}, {status: 404});
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if(!isPasswordValid) return Response.json({error: "Invalid Password"}, {status: 401});
                return {
                    id: user._id.toString(),
                    email: user.email, 
                    role: user.role, 
                    name: user.name
                }
            }
        }), 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ], 
    callbacks:{
        async signIn({user, account}){
            if(account.provider  === "google"){
                const client = await clientPromise;
                const db = client.db("carDoctor");

                const existingUser = await db.collection("users").findOne({email: user.email});
                if(!existingUser){
                    await db.collection("users").insertOne({
                        name: user.name, 
                        email: user.email, 
                        role: "user"
                    })
                }
            }
            return true;
        },
        async jwt({token, user}){
            if(user){
                const client = await clientPromise;
                const db = client.db("carDoctor");
                const dbUser= await db.collection("users").findOne({
                    email: user.email
                })
                token.role = dbUser?.role || "user";
            }
            return token;
        }, 
        async session({session, token}){
            if(!token) return null;
            session?.user?.role= token.role;
            return session;
        }
    },
    pages:{
        signIn:"/login"
    },
};

export const { handlers, auth } = NextAuth(authOptions);