const jobCollection = [
    {
        title: 'Door-to-door fundraiser',
        date: new Date('2021-02-11T17:00:00.000+00:00'),
        description: "We would like someone to go door to signing people up to donate to our charity.",
        skillsRequired: ['caretaker'],
    },
    {
        title: 'Shop assistant',
        date: new Date('2021-03-11T23:00:00.000+00:00'),
        description: "We would like someone to help around the shop, help customers and clean the shop. The work will be 10 hours a week",
        skillsRequired: ['shopassistant'],
        charity: null,
    },
    {
        title: 'Dog sitter',
        date: new Date('2021-04-11T10:00:00.000+00:00'),
        description: "We would like someone to look after homeless dogs, and give them a lovely home for 3 weeks. Fun and love is what they need.",
        skillsRequired: ['dogsitter'],
    },
    {
        title: 'Care Taker',
        date: new Date('2021-02-11T17:00:00.000+00:00'),
        description: "We would like someone to help with eldering people. Experience would be better but a positive attitude will do!",
        skillsRequired: ['caretaker'],
    },
    {
        title: 'Crisis Volunteer',
        date: new Date('2020-12-11T16:30:00.000+00:00'),
        description: "Lifeline’s volunteers give their time, energy and expertise by working on the phones and helping others.",
        skillsRequired: ['Communication'],
    },
    {
        title: 'Bucket Collection',
        date: new Date('2020-12-23T14:00:00.000+00:00'),
        description: "We would like a number of volunteers to collect money around Plasa de Catalunya. Will be for 3 days a week.",
        skillsRequired: 'Bucket Collection',
    }
]

module.exports = jobCollection;



    // {
    //     title: 'Driver',
    //     date: new Date('2020-12-11T16:30:00.000+00:00'),
    //     description: "We would like a Driver to help transport our patients. Mainly during the day, will be just 6 hours a day.",
    //     skillsRequired: ['driver'],
    // }, 
    // {
    //     title: 'Van Driver',
    //     date: new Date('2020-12-11T16:30:00.000+00:00'),
    //     description: "We would like a Van Driver to help transport. During the night, will be just 2 hours a day. Must have their own van.",
    //     skillsRequired: ['driver'],
    // }