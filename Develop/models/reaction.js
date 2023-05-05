const { Schema } = require('mongoose');

// Schema to create Thoughts model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId, 
        // default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        // minLength: 1,
        maxLength: 280,  
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: timestamp => dateFormat(timestamp),  
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // id: false,
  }
);

reactionSchema.virtual("formatCreateAt").get(function () {
  return new Date(this.createdAt).toLocaleDateString();
});

module.exports = reactionSchema;
