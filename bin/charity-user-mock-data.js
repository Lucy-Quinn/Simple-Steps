const charityUserCollection = [

    {
        name: "Concern",
        username: "concern",
        password: "123456",
        email: "concern@mail.com",
        description: "We are concern",
        location: {
            type: 'Point',
            coordinates: [41.392325, 2.170766] //these coordinates will be reversed
        },
        userType: "charity"
    },
    {
        name: "BarcaHelp",
        username: "barcehelp",
        password: "123456",
        email: "barcahelp@mail.com",
        description: "We are BarceHelp",
        location: {
            type: 'Point',
            coordinates: [41.391655, 2.174200] //these coordinates will be reversed
        },
        userType: "charity"
    },
    {
        name: "Homeless Shelter",
        username: "homelessShelter",
        password: "123456",
        email: "homelessShelter@mail.com",
        location: {
            type: 'Point',
            coordinates: [41.395486, 2.188834] //these coordinates will be reversed
        },

        description: "We are a Homeless Shelter",
        userType: "charity"
    },
    {
        name: "Just A Drop",
        username: "justadrop",
        password: "123456",
        email: "justadrop@mail.com",
        description: "We are justadrop",
        location: {
            type: 'Point',
            coordinates: [41.393570, 2.170123] //these coordinates will be reversed
        },
        userType: "charity"
    },
    {
        name: "Lifeline",
        username: "lifeline",
        password: "123456",
        email: "lifeline@mail.com",
        description: "We are Lifeline",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.183534] //these coordinates will be reversed
        },
        userType: "charity"
    },
    {
        name: "Operation Smile",
        username: "operationsmile",
        password: "123456",
        email: "operationsmile@mail.com",
        description: "We are a Operation Smile",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.176689] //these coordinates will be reversed
        },
        userType: "charity"
    },
    // {
    //     name: 'Oxfam Intermon',
    //     username: 'Oxfam-intermon',
    //     password: '123456',
    //     email: 'oxfam.intermon@mail.com',
    //     description: 'At Oxfam Intermón we work every day to reduce social and economic inequalities in the world. LET US BUILD A FUTURE WITHOUT POVERTY.',
    //     userType: 'Charity'
    // }
]

module.exports = charityUserCollection;