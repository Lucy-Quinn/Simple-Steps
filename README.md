# Simple Steps: Barcelona Volunteering

![img](https://s18670.pcdn.co/wp-content/uploads/50-Volunteer-Ideas-for-Kids.jpg)

## Description

A web app that connects volunteers and charities in Barcelona, which offers two types of users; one to volunteer and one to find volunteers. The site shows available volunteer jobs both in list format and locations on a map. Both users can edit their profile, volunteers can apply for jobs and charities can add/remove jobs.

## User Stories

- **Homepage** - As a user I would like to access the homepage with the options to signup and login and find further information about the website.
- **Sign Up** - As a user I would like to be able to sign up as either a volunteer or a charity.
- **Login** - As a user I would like to login in either as a volunteer or charity to be able to view volunteer work and post volunteer jobs.
- **Logout** - As a user I would like to log out of my account so that no-one will have access to it and redirect to the homepage.
- **Profiles ** - As a volunteer I would like to be able to see my profile and also the charity's profile and vice versa. Also, as a volunteer I would like to be able to add jobs to my profile or as a charity user I would like to be able to create jobs.
- **Edit User** - As a user I would like to change aspects of my profile after I have signed up.
- **Job Listings** - As a user I would like to see the jobs available in my area that match my interests; available in a list format and also display the locations on a map. As a volunteer I would like to be able to click attending on jobs. As a charity user I would like to be able to add and delete jobs.

## Server Routes (Back-end):

| **Method** | **Route**                                      | \*Description\*\*                                            | **Request-Body**                                             |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                                            | Main page route. Renders the view of the Home.               |                                                              |
| `GET`      | `/auth/signup/charity`                         | Renders the view of the charity sign up form.                |                                                              |
| `POST`     | `/auth/signup/charity`                         | Sends signup data to the server and creates new charity user in the database. | {name, username, email, description, password, building, street, city, postcode, photo} |
| `GET`      | `/auth/signup/volunteer`                       | Renders the view of the volunteer sign up form.              |                                                              |
| `POST`     | `/auth/signup/volunteer`                       | Sends signup data to the server and creates new volunteer user in the database. | {name, username, email, description, age, skills, password, photo} |
| `GET`      | `/auth/login`                                  | Renders the view of the Login form.                          |                                                              |
| `POST`     | `/auth/login`                                  | Sends login form data to the server. Redirects authenticated volunteer user to job listings route and charity user to their profile. | { username, password }                                       |
| `GET`      | `/auth/logout`                                 | Destroys current session and redirects to **/auth/login**.   |                                                              |
| `GET`      | `/private/volunteer-profile/:volunteerid`      | Private route. Renders the view of the VolunteerProfile with user details. |                                                              |
| `GET`      | `/private/volunteer-profile/edit/:volunteerid` | Private route. Renders the view of VolunteerProfileEdit with the volunteer profile edit form. |                                                              |
| `POST`     | `/private/volunteer-profile/edit`              | Private route. Sends edit details to the server and the user will be updated on the database. Will redirect to **/private/volunteer-profile/:volunteerid** route. | {name, email,  age, skills, description}                     |
| `GET`      | `/private/charity-profile/:charityid`          | Private route. Renders the view of the CharityProfile with user details |                                                              |
| `GET`      | `/private/charity-profile/edit/:charityid`     | Private route. Renders the view of CharityProfileEdit with the charity profile edit form. |                                                              |
| `POST`     | `/private/charity-profile/edit`                | Private route. Sends edit details to the server and user will be updated on the database. Will redirect to **/private/charity-profile/:charityid** route. | {name, email, description, building, street, city, postcode} |
| `POST`     | `/private/charity-profile/edit/add-job`        | Private route. Sends data to the server and creates new job in the database. Will redirect to **/private/charity-profile/:charityid** route. | {title, description, skillsRequired}                         |
| `GET`      | `/private/charity-profile/delete/:jobid`       | Private route. Sends data to server to remove job and redirects to the **/private/charity-profile/:charityid** route. |                                                              |
| `GET`      | `/private/join-job/:jobid`                     | Private route. Sends data to the server and updates the logged in volunteer user document (jobsApplied). Will redirect to **/private/volunteer-profile/:volunteerid** route. |                                                              |
| `GET`      | `/private/job-listings`                        | Private route. Renders the view JobListings with content from jobs collection in a list format. |                                                              |
| `GET`      | `/private/charity-locations`                   | Private route. Renders the view CharityLocations from the user collection for userType 'charity'. |                                                              |
| `GET`      | `/api/charities`                               | Returns JSON file of all charity documents to display on MapBox map. |                                                              |

## Models

**User Model**

```javascript
const userSchema = new Schema({
    name: { type: String },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    description: { type: String, maxlength: 600 },
    photo: { type: String, default: 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg' },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    address: {
        building: { type: String, default: '' },
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        postcode: { type: String, default: '' }
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
```

**Job Model**

```javascript
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
```

## Backlog

- Favorites => where the user can add their favorite charities or the charity can add their favorite volunteers
- Filter jobs by day and time
- Jobs pending/accepted
- Review section => where the volunteers can review the jobs/charities
- Allow user to be able to delete jobs from their list
- Add maximum volunteers to job listing
- Add functionality so that user can click scroll when viewing their jobs on their profile page
- Success and error messages when joining, adding and deleting jobs
- Edit photos on profile page
- show current number of volunteers and jobs on homepage
- Add 404 and 500 page
- Delete accounts

## Links

### Trello

[Trello](https://trello.com/b/oC1sCNCn/simple-steps)

### Git

The URL to the repository and the deployed project

[Repository Link](https://github.com/Lucy-Quinn/Simple-Steps)

[Deploy Link](https://simple-steps.herokuapp.com/) (Deployed via [Render](https://render.com/))

### Wireframes

[Wireframes](./Simple-steps-wireframes.pdf) 

### Slides

The URL to the presentation slides.

[Presentation](https://docs.google.com/presentation/d/1k8kEyyX-qUC3BBt6I8T4apuhZikpifX9mAXKNJC36BI/edit#slide=id.p)
