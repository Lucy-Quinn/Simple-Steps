const React = require("react");

function Layout(props) {
  console.log('props', props)
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "Simple Steps"} </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <nav className="navbar navbar-custom navbar-expand-lg navbar-light">
          {props.isLoggedIn
            //if logged in
            ? <p>Simple Steps</p>
            //if logged out
            : (<a className="navbar-brand" href="/">Simple Steps</a>)
          }
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {props.isLoggedIn
              //if logged in as either charity or volunteer
              ? <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/private/job-listings">Job Listings</a>
                </li>
                {props.userLoggedIn.userType === 'volunteer'
                  //if user logged is a volunteer
                  ? <li className="nav-item">
                    <a className="nav-link" href={`/private/volunteer-profile/${props.userLoggedIn._id}`}>Profile</a>
                  </li>
                  //if user logged is a charity
                  : <li className="nav-item">
                    <a className="nav-link" href={`/private/charity-profile/${props.userLoggedIn._id}`}>Profile</a>
                  </li>
                }
                <li className="nav-item">
                  <a className="nav-link" href="/auth/logout">Logout</a>
                </li>
              </ul>
              :
              //if logged out as either charity or volunteer
              <ul className="navbar-nav ml-auto float-right text-right">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/signup/volunteer">Sign Up as a Volunteer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/signup/charity">Sign Up as a Charity</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/login">Login</a>
                </li>
                {/* <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Join Us & Login
                  </a>
                  <div id="dropdown" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/auth/signup/volunteer">Sign Up Volunteer</a>
                    <a className="dropdown-item" href="/auth/signup/charity">Sign Up Charity</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/auth/login">Login</a> */}
                {/* <a className="dropdown-item" href="/auth/logout">Logout</a> */}
                {/* </div>
                </li> */}
              </ul>
            }
          </div>
        </nav>
        {props.children}


      </body>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </html>
  );
}

module.exports = Layout;
