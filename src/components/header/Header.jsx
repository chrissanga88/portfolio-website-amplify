import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchAuthSession, signOut } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import './header.css';

function Header({isWhite = false}) {

  const navbarBG = isWhite ? 'bg-white' : 'bg-black'
  const textColor = isWhite ? 'text-black' : 'text-white';
  const toggleVariant = isWhite ? 'custom-toggler-black' : 'custom-toggler-white'
  const logoSrc = isWhite ? '/chris_logo_white.png' : '/chris_logo_black.png';

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  /* useEffect is used because react components should not make network calls while rendering and they should not call async functions inside the component body. fethAuthSession() is a network/async side-effect, so React requires it to be done inside useEffect. Amplify Auth session is not available synchronously, thus React cannot know if the user is logged in at the moment the component is rendered. useEffect runs only once when the header component loads, which prevents infinite loops and unnecessary checks. The isLoggedIn state allows for the component to initially render with no login status by using null as the default. As soon as the amplify auth session status is retrieved by the useEffect function, the UI is updated correctly to show whether or not the user is logged in */
  useEffect(() => {
    async function checkAuth() {
      try {
        const session = await fetchAuthSession();
        setIsLoggedIn(!!session?.tokens?.idToken);
      } catch {
        setIsLoggedIn(false);
      }
    }
    checkAuth();

    const unsubscribe = Hub.listen("auth", () => {
      checkAuth();
    });

    return unsubscribe;
  }, []);

  async function handleLogout() {
    await signOut();
    setIsLoggedIn(false);
    navigate("/"); // redirect to home
  }

  return (
    <Navbar expand="lg" className={`${navbarBG} py-0`}>
      <Container>
        <Navbar.Brand className="py-0 hover-grow">
          <img
            src={logoSrc}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Chris Sanga mountain log"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={toggleVariant}/>
        <Navbar.Collapse id="d-flex basic-navbar-nav">
          <Nav className="fs-5 container-fluid justify-content-around list">
            {/*Link component in react router is used to avoid sending an HTTP request and refreshing the page on click */}
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? `active hover-grow ${textColor}` : `hover-grow ${textColor}`
              }
              // the end prop can be set to true or false. If set to true (default) this indicates that the "to" link should only be considered active if the currently active route ends with the path after the URL ('/'). In this case, this prevents the paths from below from being considered active along with the root path. 
              end
            >
                HOME
              </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? `active hover-grow ${textColor}` : `hover-grow ${textColor}`}>PROJECTS</NavLink>
            <NavLink to="/adventure" className={({isActive}) => isActive ? `active hover-grow ${textColor}` : `hover-grow ${textColor}`}>ADVENTURE</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link 
              href="https://www.linkedin.com/in/christopher-sanga-54461527/"
              target="_blank"><AiFillLinkedin 
              className={`hover-grow ${textColor}`} 
              size="2em"/>
            </Nav.Link>
            <Nav.Link 
              href="https://github.com/chrissanga88"
              target="_blank"><AiFillGithub 
              className={`hover-grow ${textColor}`} 
              size="1.9em"/>
            </Nav.Link>
            {isLoggedIn === null ? null : (
              !isLoggedIn ? (
              <NavLink
                to="/login"
                className={`nav-link hover-grow ${textColor}`}>
                Login
              </NavLink>
            ) : (
              <span
                onClick={handleLogout}
                className={`nav-link hover-grow ${textColor}`}
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  isWhite: PropTypes.bool,
};

export default Header;