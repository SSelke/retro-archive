const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionSchema = new Schema({
    type: String,
    name: String,
    id: String,
    gameCount: String,
    gamesCollected: [
        {
            id: Number,
            name: String,
            summary: String,
            first_release_date: Number,
            screenshots: [
                {
                    url: String,
                    couldinary_id: String,
                    width: Number,
                    height: Number
                }
            ],
            cover: {
                url: String,
                couldinary_id: String,
                width: Number,
                height: Number
            },
            platfroms: [
                Number
            ]

        }
    ]
});

mongoose.model('collection', collectionSchema);
