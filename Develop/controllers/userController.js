const { User, Thought } = require('../models');

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .then((response) => res.json(response))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  // get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that id' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // update user
  updateUser (req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user found with that id' })
        : res.json(user)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  // delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID." })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);  
      });
  },
  // delete user
  deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: "No user found with this id" })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() =>
          res.json({ message: "User has been deleted" })
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        })
  },
};