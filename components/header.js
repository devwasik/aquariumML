import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import Login from "./auth/login";
import Register from "./auth/register";
export default function Header({ user }) {
  const router = useRouter();
  return (
    <Navbar bg="dark" variant="dark" className="py-2">
      <Navbar.Brand href="#home">
        <Link href="/" className="header-nav-brand-link">
          <a>
            Aquarium<span style={{ color: "#0096FF" }}>ML</span>
          </a>
        </Link>
      </Navbar.Brand>

      {!user ? (
        <Nav className=" ms-auto">
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Login />
                </Popover.Body>
              </Popover>
            }
          >
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Register />
                </Popover.Body>
              </Popover>
            }
          >
            <Nav.Link eventKey={1} href="#rfdsa">
              Register
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      ) : (
        <Nav className="ms-auto">
          <Nav.Link eventKey={1} href="/api/auth/logout">
            Logout
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}
