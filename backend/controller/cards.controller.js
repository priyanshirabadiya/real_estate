const mongoose = require("mongoose");
const Card = require("../model/cards.model");
const Message = require("../helpers/Message");

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });

    const formattedCards = cards.map((card) => ({
      ...card._doc,
      images: card.images?.map(
        (img) => `data:${img.contentType};base64,${img.data.toString("base64")}`
      ),
    }));

    res.status(200).send({ cards: formattedCards });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
