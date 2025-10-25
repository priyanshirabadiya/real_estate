const Agent = require("../model/agents.model");
const Message = require("../helpers/Message");

// ========== Upload Agent ==========
exports.uploadAgent = async (req, res) => {
  try {
    let imageData = {};
    if (req.file) {
      imageData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const agent = await Agent.create({
      ...req.body,
      image: imageData,
    });

    res.status(201).send({ agent, message: Message.AGENT_ADDED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Update Agent ==========
exports.updateAgent = async (req, res) => {
  try {
    let updateData = { ...req.body };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedAgent = await Agent.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedAgent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND });
    }

    res.status(200).send({ updatedAgent, message: Message.AGENT_UPDATED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Delete Agent ==========
exports.deleteAgent = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndUpdate(
      req.params.id,
      { isDelete: true },
      { new: true }
    );

    if (!agent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND });
    }

    res.status(200).send({ agent, message: Message.AGENT_DELETED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Get All Agents ==========

exports.getAllAgents = async (req, res) => {
  console.log("Enter to funtion");
  try {
    const agents = await Agent.find().sort({ createdAt: -1 });

    res.status(200).send({ agents: agents });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// ========== Get Single Agent ==========
exports.getSingleAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const agent = await Agent.findOne({ _id: id, isDelete: false });

    if (!agent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND });
    }

    const formattedAgent = {
      ...agent._doc,
      image: agent.image?.data
        ? `data:${agent.image.contentType};base64,${agent.image.data.toString(
            "base64"
          )}`
        : null,
    };

    res.status(200).send(formattedAgent);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
