// api/shields/[id].js
const { connectToDatabase } = require('../../lib/db');

module.exports = async (req, res) => {
  const { db } = await connectToDatabase();
  const { id } = req.query;
  const col = db.collection('shields'); // Ganti sesuai folder

  const item = await col.findOne({ id: id });
  if (!item) return res.status(404).json({ error: 'Not found' });

  if (req.method === 'GET') return res.status(200).json(item);
  
  if (req.method === 'PUT') {
    await col.updateOne({ id: id }, { $set: req.body });
    return res.status(200).json({ ...item, ...req.body });
  }

  if (req.method === 'DELETE') {
    await col.deleteOne({ id: id });
    return res.status(200).json({ message: 'Deleted' });
  }
  
  res.status(405).end();
};
