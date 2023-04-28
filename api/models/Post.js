const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    author:{type:Schema.Types.ObjectId, ref:'User'},
  },
  { timestamps: true }
);
const PostModel = model('Post', PostSchema);
module.exports = PostModel
