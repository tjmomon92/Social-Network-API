const { Thoughts, Post } = require('../models');

module.exports = {
  // gets ALL thoughts
  getThoughts(req, res) {
    Thoughts.find({})
      .select('-__v')
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // get single thoguht by ID
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return thought.findOneAndUpdate(
          { _id: req.body.thoughtId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no post with that ID' })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete thought
  deleteThought(req, res) {
    Thoughts.findByIdAndDelete({ _id: req.params.thoughtId })
      .then(() => res.json('Thought deleted'))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
  })}
    // add reaction

    // delete reaction

};