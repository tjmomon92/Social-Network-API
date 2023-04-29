const { Thought, User } = require('../models');

module.exports = {
  // gets ALL thoughts
  getThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get single thought by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No thought under that id' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but no users with that id' })
          : res.json('Thought created')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found under this id" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete thought
  deleteThought(req, res) {
    Thought.findByIdAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id" })
        : User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        )
    )
    .then((user) =>
      !user
        ? res.status(404).json({
          message: "It broke",
        })
      : res.json({ message: "Thought deleted" })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
    // add reaction
    addReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: "No thought found, so no reaction added" })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // delete reaction
    deleteReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: "No thought found, so reaction was not removed" })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  };