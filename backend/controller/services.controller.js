const Service = require('../model/service.model');
const Message = require('../helpers/Message');

exports.uploadService = async (req, res) => {
  try {
    let iconData = {};
    if (req.file) {
      iconData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const service = await Service.create({
      ...req.body,
      icon: iconData,
    });

    res.status(201).send({ service, message: Message.SERVICE_ADDED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.updateService = async (req, res) => {
  try {
    let updateData = { ...req.body };

    if (req.file) {
      updateData.icon = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).send({ message: Message.SERVICE_NOT_FOUND });
    }

    res.status(200).send({ updatedService, message: Message.SERVICE_UPDATED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { isDelete: true },
      { new: true }
    );

    if (!service) {
      return res.status(404).send({ message: Message.SERVICE_NOT_FOUND });
    }

    res.status(200).send({ service, message: Message.SERVICE_DELETED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isDelete: false }).sort({ createdAt: -1 });

    const formattedServices = services.map(service => ({
      ...service._doc,
      icon: service.icon?.data
        ? `data:${service.icon.contentType};base64,${service.icon.data.toString('base64')}`
        : null,
    }));

    res.status(200).send({ services: formattedServices });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.getSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findOne({ _id: id, isDelete: false });

    if (!service) {
      return res.status(404).send({ message: Message.SERVICE_NOT_FOUND });
    }

    const formattedService = {
      ...service._doc,
      icon: service.icon?.data
        ? `data:${service.icon.contentType};base64,${service.icon.data.toString('base64')}`
        : null,
    };

    res.status(200).send(formattedService);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
