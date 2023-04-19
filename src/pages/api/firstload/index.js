export default function (req, res) {

    if (req.method === "POST") {

        const cookieValue = "false";
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: null,
            path: '/',
        };
        res.setHeader('Set-Cookie', `firstLoad=${cookieValue}; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`);
        res.status(200).send({ status: "ok" })
    } else {
        res.status(404).send({ error: "method not allowed" })
    }
}