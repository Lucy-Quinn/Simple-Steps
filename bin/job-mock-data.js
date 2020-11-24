const jobCollection = [
    {
        // name: 'Oxfam Intermon',
        title: 'Shop assistant',
        date: new Date('2021-03-11T23:00:00.000+00:00'),
        description:"We would like someone to help around the shop, help customers and clean the shop. The work will be 10 hours a week",
        address: '',
        skillsRequired: ['shopassistant'],
        charity: null,
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] },
        // building: 641,
        // street: "Gran Via de les Corts Catalanes",
        // postcode: "08010",
        // city: "barcelona",
    },
    {
        // name: 'Oxfam Intermon',
        title: 'Care Taker',
        date: new Date('2021-02-11T17:00:00.000+00:00'),
        description:"We would like someone to help with eldering people. Experience would be better but a positive attitude will do!",
        address: '',
        skillsRequired: ['caretaker'],
        
        // location: { type: "Point", "coordinates": [2.167294, 41.405294] },
        // building: 12,
        // street: "Passatge de Llavallol",
        // postcode: "08025",
        // city: "barcelona",
    },
    {
        // name: 'Oxfam Intermon',
        title: 'Driver',
        date: new Date('2020-12-11T16:30:00.000+00:00'),
        description:"We would like a Driver to help transport our patients. Mainly during the day, will be just 6 hours a day",

        address: '',
        skillsRequired: ['driver'],
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] }
    },
    {
        // name: 'Oxfam Intermon',
        title: 'Bucket Collection',
        date: new Date('2020-12-23T14:00:00.000+00:00'),
        description: "We would like a number of volunteers to collect money around Plasa de Catalunya. Will be for 3 days a week",

        address: '',
        skillsRequired: 'Bucket Collection',
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] }
    },
    {
        // name: 'Oxfam Intermon',
        title: 'Dog sitter',
        date: new Date('2021-04-11T10:00:00.000+00:00'),
        description:"We would someone to look after homeless dogs, take one in for 3 weeks. You must not have another dog as these homeless dogs need space.",

        address: '',
        skillsRequired: ['dogsitter'],
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] }
    },
    {
        // name: 'Oxfam Intermon',
        title: 'Van Driver',
        date: new Date('2020-12-11T16:30:00.000+00:00'),
        description:"We would like a Van Driver to help transport. During the night, will be just 2 hours a day. Must have their own van.",

        address: '',
        skillsRequired: ['driver'],
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] }
    }


]

module.exports = jobCollection;