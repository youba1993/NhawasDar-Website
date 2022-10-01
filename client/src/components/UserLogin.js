import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function UserLogin() {

  const [formDataIn, setFormDataIn] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormDataIn({
      ...formDataIn,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // fetch("/user_login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ "user": formDataIn }),
    // }).then((res) => {
    //   if (res.ok) {
    //     setToken(res.headers.get("Authorization"));
    //     return res
    //       .json()
    //       .then((userJson) =>
    //         dispatch({ type: AUTHENTICATED, payload: userJson })
    //       );
    //   } else {
    //     return res.json().then((errors) => {
    //       dispatch({ type: NOT_AUTHENTICATED });
    //       return Promise.reject(errors);
    //     });
    //   }
    // })
  }

  return (
    <Container>
      <h1>User </h1>
      <Form onSubmit={(e) => { handleSubmit(e) }}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control name="email" value={formDataIn.email} required onChange={(e) => { handleChange(e) }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" name="password" value={formDataIn.password} required onChange={(e) => { handleChange(e) }} placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  )

}

export default UserLogin;
