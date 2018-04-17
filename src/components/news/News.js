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
})
this.handleSearch=this.handleSearch.bind(this);
}

componentDidMount() {
  //set loading enable
  setTimeout(() => this.setState({ loading:false }),3000);//setState loading
  this.serverRequest = $.get('../../data.json', function(data) {
     var tempApts = data.results;
         this.setState({
             news: tempApts
         }); //setState
     }.bind(this));
   }//componentDidMount

componentWillUnmount() {
       this.serverRequest.abort();
   } //componentWillUnmount

handleSearch(e){
   this.setState({search : e.target.value})//setState search
 }//search
handleNews(news)
   {
   return news.map( (news,i) => (
     <Newssingle key={news.id.value} item={news}/>
   ))
 }//display News
render(){

   let news=this.state.news.filter(news => news.title.indexOf(this.state.search) !== -1 );
    return(
  <div>

      <SearchNews text={this.state.search}  onChange={(e) =>this.handleSearch(e)}/>
      <div className="container card-columns">
         {
        this.state.loading ?  <Loading/> : this.handleNews(news)
        }
     </div>
  </div>
    )
  }
}

export default News;
