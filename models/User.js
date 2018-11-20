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
    ],
    recentGames: [
        {
            id: Number,
            name: String,
            cover: {
                url: String,
                couldinary_id: String,
                width: Number,
                height: Number
            }
        }
    ]
});

mongoose.model('users', userSchema);
