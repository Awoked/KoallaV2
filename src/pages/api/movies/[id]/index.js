import Movie from "@/models/movies";
import mongoose from "mongoose";


export default function handler(req, res) {
    mongoose.connect(process.env.MONGOURL, { useUnifiedTopology: true })
    .then((res) => {
      console.log("Bağlantı Kuruldu")
    }).catch(err => {
      console.log(err)
    })


    const { id } = req.query;
    console.log(id)
    Movie.findById(id).then(result =>{

        res.json(result);
    }).catch(err =>{
        console.log(err)
        res.status(404).end()
    })


}