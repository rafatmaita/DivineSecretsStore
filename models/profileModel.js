const pool = require('../db');

const updateUser = async (userId, username, email, password) => {
  const updateUserQuery = `
    UPDATE users
    SET username = $1, email = $2, password = $3
    WHERE user_id = $4
    RETURNING *
  `;
  const values = [username, email, password, userId];

  try {
    const updatedUser = await pool.query(updateUserQuery, values);
    return updatedUser.rows[0];
  } catch (error) {
    throw new Error('Error updating user profile');
  }
};

const getUserDetails = async (userId) => {
    const getUserDetailsQuery = `
      SELECT username, email
      FROM users
      WHERE user_id = $1
    `;
    const values = [userId];
  
    try {
      const user = await pool.query(getUserDetailsQuery, values);
      return user.rows[0];
    } catch (error) {
      throw new Error('Error fetching user details');
    }
  };



module.exports = {
  updateUser,
  getUserDetails 
};
