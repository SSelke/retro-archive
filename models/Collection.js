const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionSchema = new Schema({
    type: String,
    name: String,
    id: String,
    gamesCollected: [
        {
            id: Number
        }
    ]
});

mongoose.model('collection', collectionSchema);
