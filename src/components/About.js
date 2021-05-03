import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import headshot from '../images/headshot.png';
import about from '../images/who-am-i.png';

const MainBodyStyling = { boxShadow: '8px 8px 20px rgb(41, 65, 78, 0.8)', margin: '0px 80px 0px 80px' };


const About = () => {
    return (
        <Fragment>
            <div className="body-background">
                <div className="text-center">
                    <Card className="card-background" style={ MainBodyStyling } bg='light'>
                        <Card.header><img src={about} alt="Who am I?" width="200" height="120"></img></Card.header>
                        <Card.body>
                            <Card.Title>
                                <img src={headshot} className="wrap-text" alt="Evan's Headshot" width="150" height="150"></img>

                                <p className="about-body-font-size">
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
                                   Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
                                </p>
                            </Card.Title>
                        </Card.body>

                    </Card>
                </div>
            </div>
        </Fragment>
    );
};


export default About;