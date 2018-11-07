const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    googleID: String,
    givenName: String,
    familyName: String,
    collections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "collection"
        }
    ]
});

mongoose.model('users', userSchema);
