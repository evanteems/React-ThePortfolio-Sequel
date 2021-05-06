import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Fragment, useState } from 'react';

import Card from 'react-bootstrap/Card';

import { Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import { validateEmail } from '../utils/helpers';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 5% 0px 5%' };

const Contact = () => {
    const [formState, setFromState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    /*
    setFormState function updates the formState value in the name property.
    Assigning the value that is taken from the input field in the UI with the 
    value e.target.value. Assigning this value to the property formStae.name will
    work with the previous vlaue.
    */
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('*** This email is unfortunately invalid! ***');
            }
            else {
                setErrorMessage('');
            };
        }
        else {
            if (!e.target.value.length) {
                let fieldName = capitalizeFirstLetter(e.target.name);
                setErrorMessage(`*** ${fieldName} is required!! ***`);
            }
            else {
                setErrorMessage('');
            };
        };

        if (!errorMessage) {
            setFromState({ ...formState, [e.target.name]: e.target.value });
        };

        console.log(`Error Message:`, errorMessage);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <Fragment>
            <div className="body-background text-center">
                <div>
                    <Card className="card-background" style={MainBodyStyling} bg='light'>
                        <Card.Header className="welcome-font-size">Connect With Me</Card.Header>
                        <Card.Body>
                            {errorMessage && (
                                <div>
                                    <p></p><p className="error-font">{errorMessage}</p>
                                </div>
                            )}

                            <Form.Group onSumbit={handleSubmit} className="contact-body-font-size contact-div-padding">
                                <Col xs={{ span: 12}}>
                                    <div>
                                        <Form.Label>Name:</Form.Label>
                                        <form.Control type="text" name="name" defaultValue={name} onBlur={handleChange}></form.Control>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Form.Label>Email Address:</Form.Label>
                                        <Form.Control as="textarea" name="message" defaultValue={message} onBlur={handleChange} rows={5} ></Form.Control>
                                    </div>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Col xs={{ span: 12}}>
                                    <Button variant="primary" size="sm"
                                        className="text-light" data-testid="button" >
                                        Submit!
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Fragment>);
};

export default Contact;