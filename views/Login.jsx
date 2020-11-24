const React = require('react');
const Layout = require('./Layout');

function Login(props) {
    return (
        <Layout title="Login In" isLoggedIn={false}>
            <section id="login-section">
                <div className="login-card">
                    <h1>Login</h1>
                    <form className="login-form" id="form" action="/auth/login" method="POST">
                        <label>Username</label>

                        <input type="text" name="username" placeholder="Your username" />

                        <label>Password</label>

                        <input type="password" name="password" placeholder="******" />

                        <button className="action-btn btn" type="submit">Login</button>
                    </form>

                    {
                        props.errorMessage ?
                            (<div className="error-message"> {props.errorMessage}</div>)
                            :
                            null
                    }

                    <div className="account-message">
                        <p>Don't have an account?</p>
                        <br />
                        <div className="login-redirect-links">
                            <a href="/auth/signup/volunteer">Sign up as Volunteer</a>
                            <a href="/auth/signup/charity">Sign up as Charity</a>
                        </div>

                    </div>
                    <div></div>
                    <div></div>

                </div>
            </section>
        </Layout>
    )
}




module.exports = Login;