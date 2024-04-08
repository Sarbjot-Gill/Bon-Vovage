import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'

function Navbarr() {
  return (
    <>
      <Navbar className="bg-body" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='qq'>Bon Vovage</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/tour" className='qq'>Hotels</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/Ez' className='qq'>Famous Places</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="link-2" className='qq'>Link</Nav.Link>
            </Nav.Item> */}
            
          </Nav>
        </Container>

      </Navbar>
    </>
  )
}
export default Navbarr;