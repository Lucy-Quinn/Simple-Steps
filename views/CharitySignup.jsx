const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout title="Charity Sign Up" isLoggedIn={false}>
            <h1>Charity Signup</h1>
            <form action="/auth/signup/charity" method="POST" encType="multipart/form-data">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name" required></input>

                <label>Username</label>
                <input type="text" name="username" placeholder="Your username" required></input>

                <label>Email</label>
                <input type="email" name="email" placeholder="Your email address" required></input>

                <label>Description</label>
                <textarea name="description" rows="4" cols="50" placeholder="A brief description about yourself" required />

                <label>Password</label>
                <input type="password" name="password" placeholder="Password" required></input>
                {/* 
                <label>Repeat Password</label>
                <input type="password" name="repeat-password" placeholder="Password"></input> */}


                <label>Charity Logo</label>
                <input type='file' name='profilepic' />

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