const mongoose = require('mongoose');

//requiring the schema
const User = require('./../models/User.model');
const Job = require('./../models/Job.model');


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
        console.log(`Created ${createdJobs.length} jobs`);

        // 3. WHEN .create() OPERATION IS DONE
        // UPDATE THE OBJECTS IN THE ARRAY OF user charities
        const updatedCharityUser = userCharities.map((userCharity, i) => {
            // Update the userCharity and set the corresponding job id
            // to create the reference
            const job = createdJobs[i];
            const jobId = job._id;
            userCharity.jobsCreated = [jobId];

            return userCharity; // return the updated userCharity
        });

        const pr = User.create(updatedCharityUser);
        return pr; // forwards the promise to next `then`
    })
    .then((createdCharityUsers) => {
        // 4. WHEN .create() OPERATION IS DONE, CLOSE DB CONNECTION
        //const jobId = String(createdCharityUsers[0].jobsCreated[0]);

        createdCharityUsers.forEach((charityUser) => {
            const jobId = String(charityUser.jobsCreated[0]);
            const charityUserId = charityUser._id;
            // console.log('charityuser', charityUserId)
            Job.findByIdAndUpdate(jobId, { charity: charityUserId }, { new: true })
                .then((d) => {
                    console.log('d', d)
                })
                .catch((error) => {
                    console.log('error', error)
                })
            // const pr = Job.findByIdAndUpdate(jobId)
            //     const pr = Job.findByIdAndUpdate(jobId, { $set: { title: 'a' } }, { new: true })
            //     return pr
            // })
            // // Job.findByIdAndUpdate(jobId, { $set: { title: 'a' } }, { new: true })
            // .then((d) => {
            //     console.log('dddddddddddddddd', d)
            // })
            // .catch((error) => {
            //     console.log('error', error)
            // })
            const oneJobId = String(createdCharityUsers[0].jobsCreated[0]);
            const pr = Job.findById(oneJobId)
            return pr;
        }).then(() => {

            console.log(`Inserted ${createdCharityUsers} charities`);
            mongoose.connection.close();
        })

    })
    .catch((err) => console.log(err));