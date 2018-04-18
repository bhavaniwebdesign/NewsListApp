import React, { Component } from 'react';
import Newssingle from './Newssingle';
import Loading from '../loading/Loading.js';
import SearchNews from './SearchNews.js'
import $ from 'jquery';

class News extends Component
{
constructor(props)
{
super(props)
this.state=({
news:[],
loading:true,
search: "",
currentPage:1,
perPageItems:5,
pageNumbers :[],
eventType: ""
})
this.handleSearch=this.handleSearch.bind(this);
this.fetchNews=this.fetchNews.bind(this);
this.handleClick=this.handleClick.bind(this);
}
fetchNews()
{
  this.serverRequest = $.get('../../data.json', function(data) {
     var tempApts = data.results;
         this.setState({
             news: tempApts
         }); //setState

         for (let i = 1; i <= Math.ceil(tempApts.length / this.state.perPageItems); i++) {
          this.setState(prevState => ({
            pageNumbers : prevState.pageNumbers.concat([i])

          }));
        }//display the page number

     }.bind(this));

}

componentDidMount() {
  //set loading enable
  setTimeout(() => this.setState({ loading:false }),3000);//setState loading
   this.fetchNews();
   }//componentDidMount

componentWillUnmount() {
       this.serverRequest.abort();
   } //componentWillUnmount

handleSearch(e){
   e.preventDefault();
   this.setState({search : e.target.value,eventType: e.type})//setState search
   console.log("test"+this.state.eventType);
 }//search
handleNews(news)
   {
   return news.map( (news,i) => (
     <Newssingle key={news.id.value} item={news}/>
   ))
 }//display News
 handleClick(event) {
     event.preventDefault();

        this.setState({
          currentPage: Number(event.target.id),
          eventType: event.type
        });
      }//setting up current page for pagination
render(){
   let newsOne=this.state.news.filter(news => news.title.indexOf(this.state.search) !== -1 );
   const { news, currentPage, perPageItems} = this.state;
   const indexOfLastItem = currentPage * perPageItems;
   const indexOfFirstItem = indexOfLastItem - perPageItems;
   const currentTodos = this.state.news.slice(indexOfFirstItem , indexOfLastItem );
  return(
  <div>
        <SearchNews text={this.state.search}  onChange={(e) =>this.handleSearch(e)}/>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
                {
              this.state.pageNumbers.map((number,i) => <li className="page-item"><a className="page-link" href="#" key={number}
                    id={number}
                    onClick={this.handleClick}>{number}</a></li>)
                }
          </ul>
        </nav>

        <div className="container card-columns">
           {
          this.state.loading ?  <Loading/> : (this.state.eventType === "click")  ? this.handleNews(currentTodos) :  this.handleNews(newsOne)
          }
       </div>
  </div>
    )
  }
}

export default News;
