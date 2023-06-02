import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useParams } from 'react-router-dom';

function ShowDetails() {
    const showId = useParams();
    const shows = useLoaderData();

    // find single show
    const singleShow = shows.find((s) => s.show.id == showId.id);
    const { id, name, image, type, language, genres, status, schedule, summary, rating } =
        singleShow.show;

    const genresList = genres.join(', ');
    const scheduleList = schedule.days.join(', ');

    return (
        <div className="container ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Show Hunter | Show Details</title>
            </Helmet>
            <h1 className="fw-bold fs-2 text-center py-3">Show Details</h1>
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
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-primary">Book The Show</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ShowDetails;
