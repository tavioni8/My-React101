import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.notes = [
      {
        id:1,
        text: 'Watch The Godfather 1',
      },
      {
        id:2,
        text: 'Watch The Godfather 2',
      },
      {
        id:3,
        text: 'Watch The Godfather 3',
      },
    ]
  }

  render() {
    return (
      <div className="wrap">
          <div className="container">
              <div className="tittle">
                  <h1>Daily Todo List</h1>
              </div>
              <div className="add-note">
                  <label htmlFor="note-input"></label>
                  <input type="text" placeholder=" Add Your Todo" className="note-input"></input>
                  <i className="fas fa-plus"></i>
              </div>
              <div className="notes">
                {
                  this.notes.map((note)=>{
                    return (
                      <div className="note n1">
                          <label className="checkbox">
                              <input type="checkbox" name="" id="checkbox"></input>
                          </label>
                          <div className="note-text">
                          {note.text}
                          </div>
                      </div>
                    )
                  })
                }  
              </div>
          </div>
      </div>
    );
  }

}

export default App;
