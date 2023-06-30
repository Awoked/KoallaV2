import { add, remove, get, update } from "@/firebase/users";

export default function handler(req, res) {
    const method = req.method;
    const { process } = req.query;

    if (method === "POST") {
        const { username, password } = req.body;

        if (process === "register") {
            get().then(data => {

                const user = data.find(data => data.username === username);
                if (user) {
                    res.status(409).json({ message: "Bu kullanıcı zaten kayıtlı!" });
                    return;
                }

                add({
                    ...req.body,
                    role: "user"
                })
                    .then(() => {
                        res.status(200).json({ message: "Kayıt Başarılı." });
                    }).catch(error => {
                        res.status(404).json({ message: "Error!" });
                    });

            })
        } else if (process === "login") {
            get().then(data => {

                const user = data.find(data => data.username === username && data.password === password);
                if (user) {
                    res.status(200).json({ id: user.id, username: user.username, role: user.role, name: user.username });
                    return;
                }

                res.status(505).json({ message: "Kullanıcı adı veya şifre yanlış!" });

            })
        }


    }


}