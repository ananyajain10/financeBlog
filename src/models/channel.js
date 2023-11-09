const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function(value) {
                return value.length >= 5 && value.length <= 10;
            },
            message: 'User name must be between 5 and 10 characters'
        }
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value){
                return value.length >=5 && value.length <= 50;
            },
            message: "Name must be between 5 and 50 characters"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                return value.length >= 8 && value.length <= 15;
            },
            message: 'Password must be between 8 and 15 characters'
        }
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,

        

        validate: {
            validator: function (value) {

                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: 'Invalid email format'
        }
    },



    bio: {
        type: String,
        required: true,
        default: null

    },



});

const ChannelModel = mongoose.model('Channel', channelSchema);

module.exports = ChannelModel