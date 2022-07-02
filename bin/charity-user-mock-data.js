const charityUserCollection = [
    {
        name: "Concern",
        username: "Concern",
        password: "123456",
        email: "concern@mail.com",
        description: "With more than 3,900 staff of 50 nationalities, Concern operates in 25 of the world's poorest countries, helping people to achieve major and long-lasting improvements in their lives.",
        location: {
            type: 'Point',
            coordinates: [41.392325, 2.170766] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/004/Concern-Worldwide.png",
        address: {
            building: 20,
            street: "Carrer dels Banys Nous",
            city: "barcelona",
            postcode: "08002"
        }
    },
    {
        name: 'Oxfam Intermon',
        username: 'Oxfamintermon',
        password: '123456',
        email: 'oxfam.intermon@mail.com',
        description: 'At Oxfam Intermón we work every day to reduce social and economic inequalities in the world. LET US BUILD A FUTURE WITHOUT POVERTY.',
        location: {
            type: 'Point',
            coordinates: [41.391655, 2.174200] //these coordinates will be reversed
        },
        userType: 'charity',
        photo: 'http://sas.usal.es/wp-content/uploads/2015/01/Oxfam.jpg',
        address: {
            building: 12,
            street: "Passatge de Llavallol",
            city: "barcelona",
            postcode: "08025"
        }
    },
    {
        name: "Hacesfalta",
        username: "Hacesfalta",
        password: "123456",
        email: "hacesfalta@mail.com",
        location: {
            type: 'Point',
            coordinates: [41.395486, 2.188834] //these coordinates will be reversed
        },
        description: "Hacesfalta is a website that gathers various volunteering opportunities. You can choose between areas like Humanitarian Help; Sports; Human Rights; Children, Youth and Family; Immigration and Refuge; Senior Citizens; Environment; Women; Minorities; Animal Welfare; and Health.",
        userType: "charity",
        photo: "https://www.hacesfalta.org/images/logo-hacesfalta.png",
        address: {
            building: 641,
            street: "Gran Via de les Corts Catalanes",
            city: "barcelona",
            postcode: "08010"
        }
    },
    {
        name: "Amics de la gent gran",
        username: "Gentgran",
        password: "123456",
        email: "gentgran@mail.com",
        description: "A volunteer operated organization, Amics de la gent gran works to better the quality of life for senior citizens. Volunteers work to develop a friendship and establish bonds with older people suffering from isolation. The program is designed to give older people emotional support, make them active and sociable and to inform society about the reality in which the senior citizens live.",
        location: {
            type: 'Point',
            coordinates: [41.393570, 2.170123] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://amigosdelosmayores.org/themes/agg/images/logo_ca.svg",
        address: {
            building: 134,
            street: "Carrer de Mallorca",
            city: "barcelona",
            postcode: "08036"
        }
    },
    {
        name: "Lifeline",
        username: "Lifeline",
        password: "123456",
        email: "lifeline@mail.com",
        description: "Lifeline is a non-profit organisation that provides free, 24-hour Telephone Crisis Support service. Volunteer Crisis Supporters provide suicide prevention services, mental health support and emotional assistance, not only via telephone but face-to-face and online.",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.183534] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://upload.wikimedia.org/wikipedia/en/2/21/Lifeline_Australia_Logo.gif",
        address: {
            building: 134,
            street: "Carrer de Mallorca",
            city: "barcelona",
            postcode: "08036"
        }
    },
    {
        name: "Marie Curie",
        username: "Mariecurie",
        password: "123456",
        email: "mariecurie@mail.com",
        description: "Marie Curie is a registered charitable organisation which provides care and support to people with terminal illnesses and their families. It was established in 1948, the same year as the National Health Service.",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.176689] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Marie_Curie_logo.png/200px-Marie_Curie_logo.png",
        address: {
            building: 205,
            street: "Avinguda Diagonal",
            city: "barcelona",
            postcode: "08018"
        }
    }
]

module.exports = charityUserCollection;