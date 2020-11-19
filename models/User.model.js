// Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    description: { type: String, maxlength: 280 },
    photo: { type: String, default: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg' },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    age: Number, //only for volunteer
    skills: [String], //only for volunteer
    jobsApplied: [{ type: Schema.Types.ObjectId, ref: "Job" }], //only for volunteer
    jobsCreated: [{ type: Schema.Types.ObjectId, ref: "Job" }], //only for charity
    userType: {
        type: String, enum: ['charity', 'volunteer'], required: true
    }
},
    {
        timestamps: {
            createdAt: 'create_at',
            updatedAt: 'updated_at'
        }
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;