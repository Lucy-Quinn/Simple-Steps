const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema(
    {
        title: { type: String, require: true },
        date: { type: Date, require: true },
        address: {
            street: { type: String, default: '' }
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        skillsRequired: [String], //only for volunteer
        charity: { type: Schema.Types.ObjectId, ref: "User" },
        volunteers: [{
            volunteer: { type: Schema.Types.ObjectId, ref: "User" },
            accepted: Boolean
        }
        ]
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