import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {


                const { username, password } = credentials;


                const user = { id: "24", name: "koallaAdmin", email: "test", role: "admin" };

                if (username !== user.name && password !== "salihalper1234") {
                    return null;
                }

                // const user = await fetch(`${process.env.HOST}/api/auth/login`, {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ name: username, password })
                // })

                // if (user.status !== 200) {
                //     return null;
                // }

                return user;

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            /* Step 1: update the token based on the user object */
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        session({ session, token }) {
            /* Step 2: update the session.user based on the token object */
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/auth/login",
        error: "/",
        newUser: "/"
    },
    secret: process.env.SECRET_AUTH_KEY
}

export default NextAuth(authOptions);
