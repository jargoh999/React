import React from 'react';
import './LogInForm.css';
import Illustration from '../../Illustration';
import Form from '../../Form';
import Input from '../../Input';
import Button from '../../Button';

const LoginForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
    };
  
    return (
      <div className="logIn-container">
        <Illustration src='./secondPerson.png'  alt='oops'/>      
        <div className="form-container">
          <h2>Welcome Back</h2>
          <p>Log in to your dashboard </p>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
            <p>
           <a>Remember me </a><a> Forgot Password</a>
          </p>
            <Button>Login</Button>
          </Form>
          <p>
            <a>Don't have an account?</a> <a href='?' > Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default LoginForm;