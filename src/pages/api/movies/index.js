import { get, add, remove, update } from "@/firebase/movies";
import slugify from "slugify";


export default function (req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        get(id && id).then(data => {
            res.status(200).json(data);
        }).catch(error => {
            res.status(500).json({ message: "Error!", error: error });
        });
    }

    else if (req.method === "POST") {
        const { title, description, imageCover, movieURL } = req.body;

        const data = req.body;

        add({
            ...data,
            slug: slugify(data.title)
        }).then(() => {
            res.status(200).json({ message: "Successfully added!" });
        }).catch(error => {
            console.log(error);
            res.status(404).end();
        })

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