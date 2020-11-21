const React = require("react");
const Layout = require("./Layout");
//const Card = require("./components/Card");

function Home() {
  return (
    <Layout title="Home Page" isLoggedIn={false}>
      <h1>Home Page</h1>
      <button>To Volunteer</button>
      <button>To Find Volunteers</button>
      <p className="account-message">
        Don't have an account?
        <a href="/auth/signup/volunteer">Sign up as Volunteer</a>
        <a href="/auth/signup/charity">Sign up as Charity</a>
      </p>
    </Layout>
  );
}

module.exports = Home;
