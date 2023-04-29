const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
  deleteUser,
} = require('../../controllers/tagController');

// /api/tags
router.route('/').get(getTags).post(createTag);

// /api/tags/:tagId
router.route('/:tagId').get(getSingleTag);

module.exports = router;
