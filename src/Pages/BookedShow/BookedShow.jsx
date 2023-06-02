import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function BookingShow() {
    const [bookedShow, setBookedShow] = useState();
    useEffect(() => {
        const storedBookingData = localStorage.getItem('bookingData');
        setBookedShow(JSON.parse(storedBookingData));
    }, []);

    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Show Hunter | Booked Show</title>
            </Helmet>
            <h1 className="fw-bold fs-2 text-center py-3">My Booking</h1>
            {bookedShow?.map((show) => (
                <div
                    className="d-flex justify-content-between mt-3 align-items-center"
                    key={show.id}
                >
                    <div className="d-flex align-items-center gap-2">
                        <img
                            style={{ height: ' 200px' }}
                            className="rounded"
                            src={show.image}
                            alt={show.name}
                        />
                        <div>
                            <h4>Name: {show.name}</h4>
                            <p className="m-0">CUstomer Name: {show.userName}</p>
                            <p className="m-0">CUstomer Email: {show.userEmail}</p>
                            <p className="m-0">Language: {show.language}</p>
                            <p className="m-0">
                                Show Date: {moment(show.date).format('DD MMM YYYY')}
                            </p>
                            <p className="m-0">Show Time: {show.time || 'No Data Found'}</p>
                        </div>
                    </div>
                    {}
                    <Link to={`/show/${show.id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BookingShow;
