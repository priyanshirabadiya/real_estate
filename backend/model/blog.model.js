const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    author: {
      type: String,
      required: true,
    },
    authorImage: {
      data: Buffer,
      contentType: String,
    },
    date: {
      type: String,
    },
    tag: {
      type: String,
    },
    comments: {
      type: Number,
      default: 0,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("blogs", blogSchema);
