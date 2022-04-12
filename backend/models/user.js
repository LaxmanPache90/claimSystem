import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  claimtype: { type: String },
  visittype: { type: String },
  name: { type: String },
  invoicenumber: { type: Number },
  date: { type: String },
  amout: { type: Number },
  remark: { type: String }

})
mongoose.models = {}
const post = mongoose.model('post', PostSchema)

export default post;

