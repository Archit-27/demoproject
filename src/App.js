
import './App.css';
import faker from 'faker';
import Comments from './components/Comments';
import ApproveCard from './components/ApproveCard';
import Season from './components/Season';
import Weather from './components/Weather';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import React from 'react';
import axios from 'axios';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };

 onSearchSubmit =  async (term) => {
     let response = await axios.get('https://api.unsplash.com/search/photos',{
       params: {query: term},
      headers: {
        Authorization : 'Client-ID RzO57ZwItgNiyfssJHOiG0hsdCc_j46mIZUQgxkcFNA'
      }
     });
     this.setState({ images : response.data.results});
 }
  render(){
  return (
    <div>
     
      <BrowserRouter>
      
    <div className ="ui secondary pointing menu">
  <NavLink className="item" to="/comments">Comments</NavLink>
  <NavLink className="item" to="/season">Season</NavLink>
  <NavLink className="item" to="/weather">Weather</NavLink>
  <NavLink className="item" to="/imagesearch">Image Search</NavLink>
  </div>
    <div>
      <Switch>
        <Route path="/comments">
        <div className="ui container comments">
        <ApproveCard>
     <Comments name="Arc" timeago="Today 6:30 p.m." com="Nice Blog Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     <ApproveCard>
     <Comments name="Sam" timeago="Today 12:00 noon" com="Nice sam Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     <ApproveCard>
     <Comments name="Jai" timeago="Today 5:30 a.m." com="Nice jai Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     <ApproveCard>
     <Comments name="Arc" timeago="Today 6:30 p.m." com="Nice Blog Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     <ApproveCard>
     <Comments name="Sam" timeago="Today 12:00 noon" com="Nice sam Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     <ApproveCard>
     <Comments name="Jai" timeago="Today 5:30 a.m." com="Nice jai Post!" avatar={faker.image.avatar()}/>
     </ApproveCard>
     </div>
        </Route>
        <Route path="/season">
        <Season />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/imagesearch">
          <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
          </div>
        </Route>
      </Switch>
    </div>
  
</BrowserRouter>

  </div>
  
  );
}
}
export default App;
