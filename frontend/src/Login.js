// src/Login.js

import React, { useEffect } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import google from './images/google.svg'
import axios from 'axios';

function Login() {
  const [email, setEmail] = React.useState("");
  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/logincreate/", { email: email }
    ).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (<>
    <div className='row' style={{ backgroundColor: "black", color: "white", fontFamily: "Poppins,san-serif", paddingLeft: "10vh", paddingTop: "2.5vh", paddingBottom: "2.5vh" }}>
      <div className='col-md-4'>
        <h1>SwiftCab</h1>
      </div>
    </div>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="4">
          <h3 className="text-center">What's your phone number or email?</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <Form.Control type="text" name='emailPhone' onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter phone number or email" />
              </InputGroup>
            </Form.Group>


            <Button onClick={fetchData} style={{ backgroundColor: "black", borderColor: "black" }} type="submit" className="w-100 mt-4">
              Continue
            </Button>
          </Form>
          <div style={{ display: "flex", alignItems: "center", margin: "5vh 0vh" }}>
            <hr style={{ flex: 1, margin: "0 10px" }} className="my-4" />
            <p style={{ margin: 0 }}>OR</p>
            <hr style={{ flex: 1, margin: "0 10px" }} className="my-4" />
          </div>
          <div className="d-flex flex-column align-items-center pb-4">
            {/* Continue with Google Button */}
            <Button
              variant="outline-dark"
              className="d-flex align-items-center justify-content-center"
              style={{ width: "300px", padding: "10px 20px", borderRadius: "5px" }}
            >
              <img
                src={google}
                alt="Google logo"
                style={{ width: "20px", marginRight: "10px" }}
              />
              Continue with Google
            </Button>
          </div>
          <hr style={{ flex: 1, margin: "0px 10px", }} className="my-4" />
          <div style={{ display: "flex", alignItems: "center", margin: "5vh 0vh" }} >
            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
          </div>
        </Col>
      </Row>
    </Container></>
  );
}

export default Login;
