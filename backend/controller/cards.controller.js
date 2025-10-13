const mongoose = require('mongoose');
const Card = require('../model/cards.model');
const Message = require('../helpers/Message');

exports.uploadCard = async (req, res) => {
    try {
        let imageData = [];
        if (req.files && req.files.length > 0) {
            imageData = req.files.map(file => ({
                data: file.buffer,
                contentType: file.mimetype
            }));
        }

        const card = await Card.create({
            ...req.body,
            images: imageData,
        });

        res.status(201).send({ card, message: Message.CARD_ADDED });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
    }
};

exports.updateCard = async (req, res) => {
    const { title, price, category, bedrooms, bathrooms, cars, area } = req.body;
    let updateData = { title, price, category, bedrooms, bathrooms, cars, area };

    try {
        if (req.files && req.files.length > 0) {
            updateData.images = req.files.map(file => ({
                data: file.buffer,
                contentType: file.mimetype
            }));
        }

        let updatedCard = await Card.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ message: Message.CARD_NOT_FOUND });
        }

        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCard = async (req, res) => {
    try {
        const card = await Card.findByIdAndUpdate(
            req.params.id,
            { isDelete: true },
            { new: true }
        );

        if (!card) {
            return res.status(404).send({ message: Message.CARD_NOT_FOUND });
        }

        res.status(200).send({ card, message: Message.CARD_DELETED });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
    }
};

exports.getAllCards = async (req, res) => {
    try {
        const filter = { isDelete: false };
        if (req.query.category) {
            filter.category = req.query.category;
        }

        const cards = await Card.find(filter).sort({ createdAt: -1 });

        const formattedCards = cards.map(card => ({
            ...card._doc,
            images: card.images?.map(img =>
                `data:${img.contentType};base64,${img.data.toString('base64')}`
            )
        }));

        res.status(200).send({ cards: formattedCards });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
    }
};

exports.getSingleCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findOne({ _id: id, isDelete: false });

        if (!card) {
            return res.status(404).send({ message: Message.CARD_NOT_FOUND });
        }

        const cardWithImages = {
            ...card._doc,
            images: card.images?.map(img =>
                `data:${img.contentType};base64,${img.data.toString('base64')}`
            )
        };

        res.status(200).send(cardWithImages);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
    }
};
