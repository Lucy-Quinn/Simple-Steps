const mongoose = require('mongoose');

//requiring the schema
const User = require('./../models/User.model');
const Job = require('./../models/Job.model');
const saltRounds = 10;
const bcrypt = require('bcrypt');



//requiring the 'fake' objects
const userVolunteers = require('./volunteer-user-mock-data');
const userCharities = require('./charity-user-mock-data');
const jobs = require('./job-mock-data');

const DB_NAME = "simple-steps";

// SEED SEQUENCE

// 0. ESTABLISH CONNECTION TO MONGO DATABASE
mongoose
    .connect(`mongodb://localhost:27017/${DB_NAME}`, {

        // .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((x) => {
        // 1. DROP THE DATABASE
        const pr = x.connection.dropDatabase();

        return pr;
    })
    .then(() => {
        // 2.  CREATE THE DOCUMENTS FROM ARRAY OF authors
        const pr = Job.create(jobs);
        return pr; // forwards the promise to next `then`
    })
    .then((createdJobs) => {
        // console.log(`Created ${createdJobs.length} jobs`);

        // 3. WHEN .create() OPERATION IS DONE
        // UPDATE THE OBJECTS IN THE ARRAY OF user charities
        const updatedCharityUser = userCharities.map((userCharity, i) => {
            // Update the userCharity and set the corresponding job id
            // to create the reference
            const job = createdJobs[i];
            const jobId = job._id;
            userCharity.jobsCreated = [jobId];

            const salt = bcrypt.genSaltSync(saltRounds);
            userCharity.password = bcrypt.hashSync(userCharity.password, salt);
            return userCharity; // return the updated userCharity
        });

        const pr = User.create(updatedCharityUser);
        return pr; // forwards the promise to next `then`
    })
    .then((createdCharityUsers) => {

        const promiseArr = createdCharityUsers.map((charityUser) => {
            const jobId = String(charityUser.jobsCreated[0]);
            const charityUserId = charityUser._id;
            return Job.findByIdAndUpdate(jobId, { charity: charityUserId }, { new: true });
        })
        const pr = Promise.all(promiseArr); //makes one big promise around all promises coming from array
        return pr
    }).then((updatedJobs) => {

        console.log(`Inserted ${updatedJobs.length} updatedJobs`);
        mongoose.connection.close();
    })

    .catch((err) => console.log(err));