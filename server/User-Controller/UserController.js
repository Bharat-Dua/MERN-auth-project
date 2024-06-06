const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("working");
  } catch (error) {
    res.json("error", error);
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("login");
  } catch (error) {
    res.json("error login ", error);
  }
};

module.exports = { register, login };
