import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      notes: [
        {
          id:1,
          text: 'Watch The Godfather 1',
          completed: false,
        },
        {
          id:2,
          text: 'Watch The Godfather 2',
          completed: false,
        },
        {
          id:3,
          text: 'Watch The Godfather 3',
          completed: false,
        },
      ],
      noteInputValue : ''
    }

  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
  }
  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }
    var newNotes = [note, ...this.state.notes]
    this.setState({
      notes:newNotes,
      noteInputValue : ''
    })
  }
  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes

    var filteredNotes = notes.filter((item)=>{
      return item.id != noteIdToDelete
    })

    this.setState({notes:filteredNotes})
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
                  <input type="text" placeholder=" Add Your Todo" className="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}></input>
                  <button type="submit" className="btn" onClick={this.handleAddButtonClick}><i className="fas fa-plus"></i></button>
              </div>
              <div className="notes">
                {
                  this.state.notes.map((note)=>{
                    return (
                      <div className="note n1" key={note.id}>
                          <label className="checkbox">
                              <input type="checkbox" name="" id="checkbox"></input>
                          </label>
                          <div className="note-text">
                          {note.text}
                          </div>
                          <div class="icons">
                            <i class="fas fa-edit"></i>
                            <i id={note.id} class="fas fa-trash-alt" onClick={this.handleNoteDelete}></i>
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
