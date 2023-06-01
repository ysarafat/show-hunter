/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment/moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ShowsCard({ show }) {
    const { id, name, image, language, rating, premiered, ended } = show;
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img
                    variant="top"
                    style={{ height: '400px', objectFit: 'cover' }}
                    src={image.original}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <span> Language: {language}</span>
                            <span className="d-flex gap-2">
                                <BsFillStarFill size={17} color="#E2A616" />{' '}
                                {rating?.average ? rating?.average : 'N/A'}
                            </span>
                        </div>
                        <div>
                            <span>Premiered: {moment(premiered).format('DD MMM YYYY')}</span> <br />
                            <span>
                                Ended: {ended ? moment(ended).format('DD MMM YYYY') : 'Running'}
                            </span>
                        </div>
                    </Card.Text>
                </Card.Body>
                {/* <button className="btn btn-primary">Show Details</button> */}
                <Link to={`/show/${id}`}>
                    <Button
                        style={{
                            borderTopLeftRadius: '0',
                            borderTopRightRadius: '0',
                            width: '100%',
                        }}
                        variant="primary"
                    >
                        Show Details
                    </Button>
                </Link>
            </Card>
        </div>
    );
}

export default ShowsCard;
