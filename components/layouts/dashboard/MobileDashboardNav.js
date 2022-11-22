import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log("here");
  return (
    <Navbar bg="primary" fixed="bottom" variant="dark" className="py-4">
      <Container style={{ textAlign: "center", color: "white" }}>
        <Col xs={3}>
          <a href="/dashboard">
            <FontAwesomeIcon icon="home" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="/dashboard/tanks">
            <FontAwesomeIcon icon="note-sticky" />
          </a>
        </Col>
        <Col xs={3}>
        <a href="/dashboard/tools">
          <FontAwesomeIcon icon="tools" />
          </a>
        </Col>
        <Col xs={3}>
        <a href="/dashboard/settings">
          <FontAwesomeIcon icon="gear" />
          </a>
        </Col>
      </Container>
    </Navbar>
  );
}
