

export default function users(req, res) {
    res.status(200).json({ users: [{name: "Milkias", age: 25, department: "Software Engineering"}] })
  }