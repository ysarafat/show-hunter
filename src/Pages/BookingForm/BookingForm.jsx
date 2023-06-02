import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function BookingForm() {
    const id = useParams();
    const shows = useLoaderData();
    const [singleShow, setSingleShow] = useState({});
    // find single show
    useEffect(() => {
        const findShow = shows.find((s) => s.show.id == id.id);
        setSingleShow(findShow);
    }, []);
    const navigate = useNavigate();
    // store booking data in local storage

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const singleBooking = [];

        const showData = {
            id: singleShow.show.id,
            userName: name,
            userEmail: email,
            date,
            name: singleShow.show.name,
            image: singleShow.show.image.original,
            language: singleShow.show.language,
            time: singleShow.show.schedule.time,
        };
        console.log(singleShow);

        singleBooking.push(showData);
        const storedBookingData = localStorage.getItem('bookingData');
        if (storedBookingData) {
            const allBooking = [];
            const bookingData = JSON.parse(storedBookingData);
            allBooking.push(...bookingData, showData);

            localStorage.setItem('bookingData', JSON.stringify(allBooking));
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Booking Confirmed',
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/booked');
        } else {
            localStorage.setItem('bookingData', JSON.stringify(singleBooking));
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Booking Confirmed',
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/booked');
        }
    };
    console.log(singleShow);
    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Show Hunter | Booking Show</title>
            </Helmet>
            <h1 className="fw-bold fs-2 text-center py-3">Booking Show</h1>
            <form onSubmit={handleSubmit} action="">
                <label className="form-label">Your Name</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Full Name"
                    name="name"
                    required
                />
                <label className="form-label mt-2">Your Email</label>
                <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                />
                <label className="form-label mt-2">Show Name</label>
                <input
                    className="form-control"
                    type="email"
                    defaultValue={singleShow.show?.name}
                    readOnly
                />
                <label className="form-label mt-2">Show Date</label>
                <input className="form-control" type="date" name="date" required />
                <label className="form-label mt-2">Show Time</label>
                <input
                    className="form-control"
                    type="email"
                    readOnly
                    defaultValue={singleShow.show?.schedule.time}
                />
                <input className="btn btn-primary w-100 mt-5" type="submit" value="Booking" />
            </form>
        </div>
    );
}

export default BookingForm;
