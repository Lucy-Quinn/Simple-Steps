const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout>
            <form action="/auth/signup" method="POST">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name"></input>

                <label>Username</label>
                <input type="text" name="username" placeholder="Your username"></input>

                <label>Email</label>
                <input type="email" name="email" placeholder="Your full name"></input>

                <label>Description</label>
                <input type="text" name="description" placeholder="A brief description about yourself"></input>

                <label>Password</label>
                <input type="password" name="password" placeholder="Password"></input>
                {/* 
                <label>Repeat Password</label>
                <input type="password" name="repeat-password" placeholder="Password"></input> */}

                {/* photo */}

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