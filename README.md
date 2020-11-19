# Simple Steps: Barcelona Volunteering 

![img](https://s18670.pcdn.co/wp-content/uploads/50-Volunteer-Ideas-for-Kids.jpg)

## Description 

A web app that connects volunteers and charities in Barcelona, which offers two types of users; one to volunteer and one to find volunteers. The site shows available volunteer jobs both in list format and locations on a map. Both users can edit their profile, volunteers can apply for jobs and charities add/remove jobs.

## User Stories

- **404** - As a user I would like to see a presentable page when the page does not exist.
- **500** - As a user I would like to see a nice error page that lets me know it was an internal error.
- **Homepage** - As a user I would like to access the homepage with the options to signup and login and find further information about the website.
- **Sign Up** - As a user I would like to be able to sign up as either a volunteer or a charity.
- **Login** - As a user I would like to login in either as a volunteer or charity user to be able to view volunteer work and post volunteer jobs.
- **Logout** - As a user I would want to be able to log out of my account so that no-one will have access to it and redirect to the homepage.
- **Profiles ** - As a volunteer I would like to be able to see my profile and also the charity's profile and vice versa. Also, as a volunteer I would like to be able to add jobs to my profile or as a charity user I would like to be able to create jobs.
- **Edit User ** - As a user I would like to change aspects of my profile after I have signed up.
- **Job Listings** - As a user I would like to see the jobs available in my area that match my interests; available in a list format and also display the locations on a map. As a volunteer user I would like to be able to click attending on jobs and remove jobs. As a charity user I would like to be able to add and delete jobs.

## Server Routes (Back-end):

| **Method** | **Route**                                         | *Description**                                               | **Request-Body**                                             |
| ---------- | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                                               | Main page route.  Renders the view of the Home. Redirect authenticated user to job listings route. |                                                              |
| `GET`      | `/auth/login`                                     | Renders the view  of the Login form.                         |                                                              |
| `POST`     | `/auth/login`                                     | Sends login form data to the server.                         | { username, password }                                       |
| `GET`      | `/auth/signup`                                    | Renders the view of the Signup form.                         |                                                              |
| `POST`     | `/auth/signup`                                    | Sends signup data to the server and creates new user in the database | {username, name, description, photo, location, userType, userData} |
| `GET`      | `/private/volunteer-profile`                      | Private route. Renders the view of the VolunteerProfile with  user details |                                                              |
| `GET`      | `/private/volunteer-profile/edit`                 | Private route. Renders the view of the VolunteerEditProfile with the volunteer profile edit form. |                                                              |
| `POST`     | `/private/volunteer-profile/edit`                 | Private route. Sends edit details to the server and user will be updated on the database. | {username, name, description, photo, location, userData {age, skills, appliedJobs}} |
| `GET`      | `/private/charity-profile`                        | Private route. Renders the view of the CharityProfile with user details |                                                              |
| `GET`      | `/private/charity-profile/volunteer/:volunteerid` | Private route - allowed for user type: Charity. Renders the view of the VolunteerProfile with the volunteer profile for the volunteer attending the charity job. |                                                              |
| `GET`      | `/private/charity-profile/edit`                   | Private route. Renders the view of CharityEditProfile with the charity profile edit form. |                                                              |
| `POST`     | `/private/charity-profile/edit`                   | Private route. Sends edit details to the server and user will be updated on the database. Will redirect to **/private/charity-profile** route. | {username, name, description, photo, location, userData(charityName, jobOffers)} |
| `POST`     | `/private/charity-profile/delete/:jobid`          | Private route. Sends data to server to remove job and redirects to the **/private/charity-profile** route. |                                                              |
| `POST`     | `/private/charity-profile/edit/add/:jobid`        | Private route. Sends data to the server and creates new job in the database. Will redirect to **/private/charity-profile** route. | {title, date, time, location, charityId}                     |
| `GET`      | `/private/job-listings`                           | Private route. Renders the view JobListings with content from jobs model in a list format. |                                                              |
| `POST`     | `/private/job-listings/add`                       | Private route. Sends data to the server to add a volunteer to a job listing and the job listing to a volunteer's profile. |                                                              |
| `GET`      | `/private/charity-locations`                      | Private route. Renders the view CharityLocations from the user model for userType 'charity'. |                                                              |
| `GET`      | `/private/charity/:charityid`                     | Private route. Renders the view with content from user model by charity Id. |                                                              |



## Models

User Model

```javascript
    name: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    description: { type: String, maxlength: 280 },
    photo: {type: String, default: 'https://www.dovercourt.org/wp-					content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'}, 
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
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
```

Job Model

```javascript
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
```



## Backlog

- Favorites => where the user can add their favorite charities or the charity can add their favorite volunteers
- Filter jobs by day and time 
- Jobs pending/accepted
- Review section
- Add component to charity page for each individual job listing
- Allow user to be able to delete jobs from their list
- Add maximum volunteers to job listing



## Links



### Trello

[Trello](https://trello.com/b/mlRVDGZU/simple-steps)



### Git

The URL to the repository and the deployed project

[Repository Link](https://github.com/Lucy-Quinn/Simple-Steps)

[Deploy Link]() //need to add link



### Wireframes

[Wireframes]() //need to add link

### Slides

The URL to the presentation slides.

[Presentation](https://docs.google.com/presentation/d/1ZixJfaZPBRazWuJz3GIZz_Akk3VCam6sfUeddH4lv08/edit#slide=id.p)



