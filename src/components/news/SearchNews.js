import React from 'react';

const SearchNews = ({text,onChange})=>(
  <div className="jumbotron jumbotron-fluid bg-info text-white">
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">News Stories</h1>
        <div className="btn-group mt-4" role="group" aria-label="Callout buttons">
        <div className="input-group text-center">
            <input id="SearchApts" placeholder="Search" type="text"
            className="form-control" value={text} onChange={onChange} aria-label="Search Appointments" />
            <div className="input-group-append">
                <button className="btn btn-light btn-lg" type="button">Latest News!</button>
              </div>
        </div>

        </div>
      </div>
    </div>

)//search
export default SearchNews;
