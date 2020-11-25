const charityUserCollection = [
    {
        name: "Concern",
        username: "concern",
        password: "123456",
        email: "concern@mail.com",
        description: "With more than 3,900 staff of 50 nationalities, Concern operates in 25 of the world's poorest countries, helping people to achieve major and long-lasting improvements in their lives.",
        location: {
            type: 'Point',
            coordinates: [41.392325, 2.170766] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/004/Concern-Worldwide.png",
        address: {building: 20,
        street: "Carrer dels Banys Nous",
        city: "barcelona",
        postcode: "08002"}
    },
    {
        name: "Trocaire",
        username: "trocaire",
        password: "123456",
        email: "trocaire@mail.com",
        description: "Trócaire is the official overseas development agency of the Catholic Church in Ireland.",
        location: {
            type: 'Point',
            coordinates: [41.391655, 2.174200] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://www.eurac-network.org/sites/default/files/styles/logo/public/trocaire.png?itok=iAL4FXVj",
        address: {
            building: 12,
        street: "Passatge de Llavallol",
        city: "barcelona",

        postcode: "08025",}
    },

    {
        name: "Hacesfalta",
        username: "hacesfalta",
        password: "123456",
        email: "hacesfalta@mail.com",
        location: {
            type: 'Point',
            coordinates: [41.395486, 2.188834] //these coordinates will be reversed
        },
        description: "Hacesfalta is a website that gathers various volunteering opportunities. You can choose between areas like Humanitarian Help; Sports; Human Rights; Children, Youth and Family; Immigration and Refuge; Senior Citizens; Environment; Women; Minorities; Animal Welfare; and Health. Different organizations and institutions will tell you what kind of volunteers they are looking for (for example, native English speakers or people with childcare experience).",
        userType: "charity",
        https: "//www.hacesfalta.org/images/logo-hacesfalta.png",
        // location: { type: "Point", "coordinates": [2.171519, 41.392156] },
        address:{
        building: 641,
        street: "Gran Via de les Corts Catalanes",
        city: "barcelona",
        postcode: "08010"}
    },
    {
        name: "Amics de la gent gran",
        username: "gentgran",
        password: "123456",
        email: "gentgran@mail.com",
        description: "A volunteer operated organization, Amics de la gent gran works to better the quality of life for senior citizens. Volunteers work to develop a friendship and establish bonds with older people suffering from isolation. The program is designed to give older people emotional support, make them active and sociable and to inform society about the reality in which the senior citizens live.",
        location: {
            type: 'Point',
            coordinates: [41.393570, 2.170123] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/106102831_3033134336741957_3724663550886371430_n.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=r75EANwlLTsAX9XW8Jc&_nc_ht=scontent-mad1-1.xx&oh=9d21a1788174c5b95954c53eeab5daa9&oe=5FE105F6",
        // location: { type: "Point", "coordinates": [2.153848, 41.387037] },
        address : {
        building: 134,
        street: "Carrer de Mallorca",
        city: "barcelona",
        postcode: "08036"}
    },
    {
        name: "Lifeline",
        username: "lifeline",
        password: "123456",
        email: "lifeline@mail.com",
        description: "Lifeline is a non-profit organisation that provides free, 24-hour Telephone Crisis Support service in Australia. Volunteer Crisis Supporters provide suicide prevention services, mental health support and emotional assistance, not only via telephone but face-to-face and online.",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.183534] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://upload.wikimedia.org/wikipedia/en/2/21/Lifeline_Australia_Logo.gif",
        // location: { type: "Point", "coordinates": [2.153848, 41.387037] },
        address: {
            building: 134,
        street: "Carrer de Mallorca",
        city: "barcelona",
        postcode: "08036"}
    },
    {
        name: "Marie Curie",
        username: "mariecurie",
        password: "123456",
        email: "mariecurie@mail.com",
        description: "Marie Curie is a registered charitable organisation in the United Kingdom which provides care and support to people with terminal illnesses and their families. It was established in 1948, the same year as the National Health Service.",
        location: {
            type: 'Point',
            coordinates: [41.391011, 2.176689] //these coordinates will be reversed
        },
        userType: "charity",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Marie_Curie_logo.png/200px-Marie_Curie_logo.png",
        // location: { type: "Point", "coordinates": [2.190358, 41.403602] },
        address: {
            building: 205,
        street: "Avinguda Diagonal",
        city: "barcelona",
        postcode: "08018"}
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