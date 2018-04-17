import React from 'react';

const SearchNews = ({text,onChange})=>(
  <div className="row search-appointments">
            <div className="col-sm-offset-3 col-sm-6">
                <div className="input-group text-center">
                    <input id="SearchApts" placeholder="Search" type="text"
                    className="form-control" value={text} onChange={onChange} aria-label="Search Appointments" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                      </div>
                </div>
            </div>
        </div>
)//search
export default SearchNews;
