import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
const MoviesList = ({movies, getPage, pageCount}) => {
  return (
    <>
    <Row className="mt-3">
      {
        movies.map((mov)=>{
          return(
          <CardMovie title={mov.title} vote_average={mov.vote_average} img={mov.poster_path
          } date={mov.release_date} vote_count={mov.vote_count
          } id={mov.id}/>
          )
        })
      }
    </Row>
      <PaginationComponent getPage={getPage} pageCount={pageCount}/>
    </>
  );
};

export default MoviesList;
