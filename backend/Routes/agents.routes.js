const express = require('express');
const agentRoutes = express.Router();

const {
  uploadAgent,
  getAllAgents,
  getSingleAgent,
  updateAgent,
  deleteAgent,
} = require('../controller/agents.controller');

const { verifyToken } = require('../helpers/verifyToken');

agentRoutes.post('/upload', verifyToken, uploadAgent);

agentRoutes.get('/getall', verifyToken, getAllAgents);

agentRoutes.get('/getsingle/:id', verifyToken, getSingleAgent);

agentRoutes.put('/update/:id', verifyToken, updateAgent);

agentRoutes.delete('/delete/:id', verifyToken, deleteAgent);

module.exports = agentRoutes;
