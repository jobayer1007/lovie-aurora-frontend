const { data } = require('@/data/itemsData');

export default function handler(req, res) {
  const product = data.filter((item) => item.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(product);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
