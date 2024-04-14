import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { DrawOutlineButton } from './Button';




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

        <DrawOutlineButton>Login</DrawOutlineButton>

  
      </FloatingLabel>
    </>
  );
}

export default LoginForm;