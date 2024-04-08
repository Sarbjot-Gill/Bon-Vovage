// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col';
import Navbarr from './Navbar';
import Lform from './Logform';
import Sform from './Sinform';
import './home.css';
import Phh from '../media/cc.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Home() {
    return (
        <>
            <Navbarr>
            </Navbarr>
            <img src={Phh} alt='zz'></img>
            <div className='ez'>
               <b> <p className='fs-1'>Welcome to Bon Voyage</p></b>
            </div>
            <div className='Xxx shadow-lg p-3 mb-5 bg-body-tertiary rounded"'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Sign In">
                        <center><h3 className='oo'>Log in</h3></center>
                        <div className='zz'>
                        <Lform></Lform>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Sign Up">
                        <center><h3>Sign Up</h3></center>
                        <Sform></Sform>

                    </Tab>
                </Tabs>

            </div>
        </>

    )
}

export default Home;