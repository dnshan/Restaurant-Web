import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { NeumorphismButton } from './Button';
import Button from 'react-bootstrap/Button';





function LoginForm() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />

       <div style={{marginTop: '15px'}}><Button variant="outline-dark">Log In</Button>{' '}</div>
 

  
      </FloatingLabel>
    </>
  );
}

export default LoginForm;