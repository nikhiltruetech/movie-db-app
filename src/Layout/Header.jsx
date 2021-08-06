import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>The Movies Hub</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
