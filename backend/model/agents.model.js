const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      // data: Buffer,
      // contentType: String,
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("agents", agentSchema);
