import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function ShowDetails() {
    const id = useParams();
    const shows = useLoaderData();

    // find single show
    const singleShow = shows.find((s) => s.show.id == id.id);
    const { name, image, type, language, genres, status, schedule, summary, rating } =
        singleShow.show;

    const genresList = genres.join(', ');
    const scheduleList = schedule.days.join(', ');

    // store booking data in local storage
    const handleBooking = (show) => {
        const singleBooking = [];
        const showData = {
            name: show.name,
            image: show.image.original,
            language: show.language,
            time: show.schedule.time,
        };
        singleBooking.push(showData);
        const storedBookingData = localStorage.getItem('bookingData');
        if (storedBookingData) {
            const allBooking = [];
            const bookingData = JSON.parse(storedBookingData);
            allBooking.push(...bookingData, showData);

            localStorage.setItem('bookingData', JSON.stringify(allBooking));
        } else {
            localStorage.setItem('bookingData', JSON.stringify(singleBooking));
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center gap-5">
                <img
                    className="img-fluid rounded"
                    style={{ height: '700px', width: '50%' }}
                    src={image.original}
                    alt=""
                />
                <div>
                    <h3>Name : {name}</h3>
                    <p>Type: {type}</p>
                    <p>Language: {language}</p>
                    <p>Genres: {genresList}</p>
                    <p>Rating: {rating?.average ? rating?.average : 'N/A'} </p>
                    <p>Status: {status}</p>
                    <div>
                        <p className="fw-bold">schedule: </p>
                        <p>Time: {schedule.time || 'N/A'}</p>
                        <p>Day: {scheduleList || 'N/A'}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Summary: </p>
                        <p dangerouslySetInnerHTML={{ __html: summary }} />
                    </div>
                    <button
                        onClick={() => handleBooking(singleShow.show)}
                        className="btn btn-primary"
                    >
                        Book The Show
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShowDetails;
