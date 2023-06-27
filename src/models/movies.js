import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  imageURL: {
    type: String,
    required: true
  },
  movieURL: String,
  description: String,
}, {
  timestamps: true
});

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);
