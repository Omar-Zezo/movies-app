import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const CardMovie = (props) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${props.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {props.title}</p>
              <p>تاريخ الاصدار: {props.date}</p>
              <p>عدد المقيمين: {props.vote_count}</p>
              <p>التقييم:{props.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
