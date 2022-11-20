import posts from '../../posts/data.json'

export default function handler(req, res) {
  res.status(200).json(posts)
}
