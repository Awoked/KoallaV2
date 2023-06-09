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


                // const user = { id: "24", name: "koallaAdmin", email: "test", role: "admin" };

                // if (username !== user.name && password !== "salihalper1234") {
                //     return null;
                // }
                // let user;
                // console.log(username, password)
                // fetch(`${process.env.HOST}/api/auth/users?process=login`, {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ username, password })
                // }).then((res) => {
                //     // console.log(res)
                //     if (res.status === 200) {
                //         return res.json();
                //     }
                // }).then(data => {
                //     // console.log(process.env.HOST)
                //     // console.log(data)
                //     user = data
                //     return user;
                // })

                const userResponse = await fetch(`${process.env.HOST}/api/auth/users?process=login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                })

                const user = await userResponse.json(); 

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
