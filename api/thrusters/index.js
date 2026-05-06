// api/thrusters/index.js
const { connectToDatabase } = require('../../lib/db');
const { generateId, validateFields } = require('../../lib/utils');

module.exports = async (req, res) => {
  const { db } = await connectToDatabase();
  const col = db.collection('thrusters');

  if (req.method === 'GET') return res.status(200).json(await col.find({}).toArray());
  if (req.method === 'POST') {
    const missing = validateFields(req.body, ['name', 'price', 'speedLevel', 'desc', 'fuelUsage']);
    if (missing) return res.status(400).json({ error: `Missing: ${missing.join(', ')}` });
    const item = { id: generateId(), ...req.body, price: Number(req.body.price) };
    await col.insertOne(item);
    return res.status(201).json(item);
  }
  res.status(405).end();
};
