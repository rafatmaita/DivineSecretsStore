const userModel = require('../models/profileModel');

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  try {
    const updatedUser = await userModel.updateUser(userId, username, email, password);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserDetails = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await userModel.getUserDetails(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      // Return only the required fields (username and email)
      const { username, email } = user;
      res.json({ username, email });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



module.exports = {
  updateUser,
  getUserDetails

};
