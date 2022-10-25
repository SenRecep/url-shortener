import mongoose from "mongoose";
const Schema = mongoose.Schema;
let UrlSchema = new Schema({
  url: { type: String, required: [true, "Url is required"] },
  code: { type: String, required: [true, "Code required"] },
});

const Url = mongoose.model("urls", UrlSchema);

export default Url;
