const React = require("react");
const Layout = require("./Layout");
//const Card = require("./components/Card");

function Home() {
  return (
    <Layout title="Home Page" isLoggedIn={false}>
      <h1>Home Page</h1>
      <button> <a href="/auth/signup/volunteer">To Volunteer</a></button>
      <button><a href="/auth/signup/charity">To Find Volunteers</a></button>
      
    </Layout>
  );
}

module.exports = Home;

