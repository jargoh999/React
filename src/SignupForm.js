import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Form from './components/Form';
import Illustration from './components/Illustration';
import './SignupForm.css';

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="signup-container">
      <Illustration src='/webpix.png'  alt='oops'/>      
      <div className="form-container">
        <h2>Welcome!</h2>
        <p>Sign up by entering the information below</p>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign Up</Button>
        </Form>
        <p>
          Already have an Account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
