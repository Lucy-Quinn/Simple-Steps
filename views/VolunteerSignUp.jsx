const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout title="Volunteer Sign Up" isLoggedIn={false}>
            <h1>Volunteer Signup</h1>
            <form action="/auth/signup/volunteer" method="POST">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name" required></input>

                <label>Username</label>
                <input type="text" name="username" placeholder="Your username" required></input>

                <label>Email</label>
                <input type="email" name="email" placeholder="Your full name" required></input>

                <label>Description</label>
                <textarea name="description" rows="4" cols="50" placeholder="A brief description about yourself" required/>

                <label>Age</label>
                <input type="number" name="age" placeholder="Your age" required></input>

                <label>Skills</label>
                <input type="text" name="skills" placeholder="Your Skills" required></input>

                <label>Password</label>
                <input type="password" name="password" placeholder="Password" required></input>
                {/* 
                <label>Repeat Password</label>
                <input type="password" name="repeat-password" placeholder="Password"></input> */}

                {/* photo */}
                <button type="submit">Sign Up</button>

                {
                    props.errorMessage ?
                        (<div className="error-message">{props.errorMessage}</div>)
                        :
                        null
                }
            </form>
        </Layout>
    )
}




module.exports = Signup;