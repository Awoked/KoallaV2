import mongoose from "mongoose";
import Movie from "@/models/movies";


export default function handler(req, res){
    // const dbURL = `mongodb+srv://test1:1234@alperdatabase.xr7hjdn.mongodb.net/koalla?retryWrites=true&w=majority`
    mongoose.connect(process.env.MONGOURL, { useUnifiedTopology: true })
      .then((res) => {
        console.log("Bağlantı Kuruldu")
      }).catch(err => {
        console.log(err)
      })

      Movie.find().then((result) =>{
        res.status(200).json(result)
      }).catch(error=>{
        console.log(error)
        res.status(404).end();  
      })

      



  // const movie = new Movie({
  //   title: 'test yazisi',
  // })

  // movie.save().then((result) => {
  //   res.status(200).json(result)

  // }).catch(err => {
  //   console.log(err)
  // })

}