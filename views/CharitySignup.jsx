const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout title="Charity Sign Up">
            <h1>Charity Signup</h1>
            <form action="/auth/signup/charity" method="POST">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name"></input>

                <label>Username</label>
                <input type="text" name="username" placeholder="Your username"></input>

                <label>Email</label>
                <input type="email" name="email" placeholder="Your full name"></input>

                <label>Description</label>
                <textarea name="description" rows="4" cols="50" placeholder="A brief description about yourself"/>

                <label>Password</label>
                <input type="password" name="password" placeholder="Password"></input>
                {/* 
                <label>Repeat Password</label>
                <input type="password" name="repeat-password" placeholder="Password"></input> */}

                {/* photo */}

                <button type="submit">Sign Up</button>
                {
                    props.errorMessage ?
                        (<div className="error-message">{
                            props.errorMessage
                        }</div>)
                        :
                        null
                }
            </form>
        </Layout>
    )
}




module.exports = Signup;