/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment/moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';

function ShowsCard({ show }) {
    const { name, image, language, rating, premiered, ended } = show;
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
                                Ended:{' '}
                                {ended ? moment(ended).format('DD MMM YYYY') : 'No Date Found'}
                            </span>
                        </div>
                    </Card.Text>
                </Card.Body>
                {/* <button className="btn btn-primary">Show Details</button> */}
                <Button
                    style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
                    variant="primary"
                >
                    Show Details
                </Button>
            </Card>
        </div>
    );
}

export default ShowsCard;
