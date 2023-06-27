import { get, add, remove, update } from "@/firebase/movies";


export default function (req, res) {
    if (req.method === "GET") {

        get().then(data => {
            res.status(200).json(data);
        }).catch(error => {
            res.status(500).end();
        });
    }

    else if (req.method === "POST") {
        const { title, description, imageCover, movieURL } = req.body;

        const data = req.body;
        console.log(data)

        add(data).catch(error => {
            console.log(error);
            res.status(404).end();
        })

        res.status(200).json({ message: "Successfully added!" });
    }

    else if (req.method === "DELETE") {
        const { id } = req.query;

        remove(id).then(() => {
            res.status(200).json({ message: "Successfully deleted!" });
        }).catch(error => {
            res.status(404).json({ message: "error" });
        });
    }

    else if (req.method === "PUT") {
        const { id } = req.query;

        update(id, req.body)
            .then(() => {
                res.status(200).json({ message: "Successfully updated!" });
            })
            .catch(error => {
                res.status(200).json({ message: "Error!" });
            })

    }
}