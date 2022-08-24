import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { UsersHelper } from '../../../helpers';
import Alert from '../../commons/Alert';
import Toast from './../../commons/Toast';

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const [vendorForm, setVendorForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    studioName: '',
    linkedIn: '',
    bgExp: '',
  });
  const [formError, setFormError] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertTitle] = useState('Info');
  const [alertText, setAlertText] = useState('');

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (!isError) {
      navigate('/vendor-login');
    }
  };
  const handleShowAlert = () => setShowAlert(true);

  const handleChange = (event) => {
    setVendorForm({ ...vendorForm, [event.target.name]: event.target.value });
  };

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(UsersHelper.vendorRegisterValidation(vendorForm));
    if (
      vendorForm.email !== '' &&
      vendorForm.firstName !== '' &&
      vendorForm.password !== ''
    ) {
      if (Object.keys(formError).length === 0) {
        setIsLoading(true);

        const newUser = await UsersHelper.registerVendor(vendorForm);

        setIsLoading(false);

        if (newUser.statusCode === 201) {
          setAlertText('Registration success!');
          setShowAlert(true);
        } else {
          console.log(newUser);
          setAlertText('Registration failed!');
          setIsError(true);
          setShowAlert(true);
        }
        return;
      }
    }
  };

  const showPassword = () => {
    setShowPass((showPass) => !showPass);
  };

  return (
    <div className='d-flex flex-column'>
      <Alert
        show={showAlert}
        title={alertTitle}
        text={alertText}
        handleShow={handleShowAlert}
        handleClose={handleCloseAlert}
      />
      <Toast show={isLoading} loading={isLoading} />
      <h1>Register account</h1>
      <Form className='mt-5'>
        <div className='text-start'>
          <hr />
          <Form.Group className='mb-3' controlId='formFirstName'>
            <Form.Label>
              <h4>First Name</h4>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              name='firstName'
              onChange={(ev) => handleChange(ev)}
              onKeyPress={(ev) => handleKeyPress(ev)}
            />
          </Form.Group>
          <p className='text-danger'>{formError.firstName}</p>

          <Form.Group className='mb-3' controlId='formLastName'>
            <Form.Label>
              <h4>Last Name</h4>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              name='lastName'
              onChange={(ev) => handleChange(ev)}
              onKeyPress={(ev) => handleKeyPress(ev)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formStudioName'>
            <Form.Label>
              <h4>Studio Name</h4>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter studio name'
              name='studioName'
              onChange={(ev) => handleChange(ev)}
              onKeyPress={(ev) => handleKeyPress(ev)}
            />
          </Form.Group>
          <p className='text-danger'>{formError.studioName}</p>

          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>
              <h4>Email</h4>
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={(ev) => handleChange(ev)}
              onKeyPress={(ev) => handleKeyPress(ev)}
            />
          </Form.Group>
          <p className='text-danger'>{formError.email}</p>

          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>
              <h4>Password</h4>
            </Form.Label>
            <Form.Control
              type={showPass ? 'text' : 'password'}
              placeholder='Enter password'
              name='password'
              onChange={(ev) => handleChange(ev)}
              onKeyPress={(ev) => handleKeyPress(ev)}
            />
          </Form.Group>
          <p className='text-danger'>{formError.password}</p>

          <Form.Group className='mb-3' controlId='formCheckbox'>
            <Form.Check
              type='checkbox'
              label='Show password'
              onChange={showPassword}
              checked={showPass}
            />
          </Form.Group>
          <hr />
        </div>

        <Form.Group className='mb-3' controlId='formBgExp'>
          <Form.Label>
            <h4>Background & Experience</h4>
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            placeholder='Tell us about your background & experience'
            name='bgExp'
            onChange={(ev) => handleChange(ev)}
            onKeyPress={(ev) => handleKeyPress(ev)}
          />
        </Form.Group>
        <p className='text-danger'>{formError.bgExp}</p>

        <Form.Group className='mb-3' controlId='formLinkedIn'>
          <Form.Label>
            <h4>LinkedIn</h4>
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter LinkedIn'
            name='linkedIn'
            onChange={(ev) => handleChange(ev)}
            onKeyPress={(ev) => handleKeyPress(ev)}
          />
        </Form.Group>
        <p className='text-danger'>{formError.linkedIn}</p>

        <div className='text-start'>
          <p>
            Already have a studio?&nbsp;
            <span>
              <Link to='/vendor-login'>Login</Link>
            </span>
          </p>
        </div>

        <Button
          className='mt-3'
          variant='dark'
          type='submit'
          onClick={handleSubmit}
        >
          Register Studio
        </Button>
      </Form>
    </div>
  );
};

export default RegisterCustomer;
