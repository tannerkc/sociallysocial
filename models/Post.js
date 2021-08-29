const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: String,
    user: String,
    postId: String,
    content: String,
    img: String,
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);