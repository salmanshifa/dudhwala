import logo from './logo.svg';
import './App.css';
import React from 'react';
import $ from 'jquery';

function App() {
  return (
    <div className="App row content">
     <Header/>
     <Content/>
     <Footer/>      
    </div>
  );
}

class Header extends React.Component {
  render() {
     return (
      <div class="col-sm-3 sidenav">
      <h4>John's Blog</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">Home</a></li>
        <li><a href="#section2">Friends</a></li>
        <li><a href="#section3">Family</a></li>
        <li><a href="#section3">Photos</a></li>
      </ul><br/>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog.."/>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
      <div class="col-sm-9">
        <h4><small>RECENT POSTS</small></h4>
        <hr/>
        <h2>I Love Indian Product temp</h2>
      </div>
     );
  }
}

class Footer extends React.Component{
  render() {
    return (
      <footer class="container-fluid">
      <p>Footer Text</p>
    </footer>
    );
 }
}

export default App;
