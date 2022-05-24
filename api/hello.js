export default function handler(req, res) {
    let msg = 'Hello, world!'
    if (req.query.name) {
        msg = `Hello, ${req.query.name}!`
    }
    res.status(200).json({ msg })
}
