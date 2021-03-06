const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.model');

const jobSchema = new Schema(
    {
        title: { type: String, require: true },
        date: { type: Date, require: true },
        description: { type: String, maxlength: 280 },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        skillsRequired: [String],
        charity: { type: Schema.Types.ObjectId, ref: "User" },
        volunteers: [{
            volunteer: { type: Schema.Types.ObjectId, ref: "User" },
            accepted: Boolean
        }]
    },
    {
        timestamps: {
            createdAt: 'create_at',
            updatedAt: 'updated_at'
        }
    }
)

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;