const { Schema, model } = require('mongoose');
const Reaction = require('./reaction');

// Schema to create Thoughts model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: timestamp => dateFormat(timestamp),
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [
      Reaction,
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    // id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

thoughtSchema.virtual('formatCreatedAt').get(function () {
    return new Date(this.createdAt).toLocaleDateString();
  });


// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
