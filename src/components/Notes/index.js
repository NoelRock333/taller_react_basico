import React from 'react';
import fire from '../../fire';

class Notes extends React.Component {
  state = {
    notes: []
  };
  
  componentWillMount() {
    /* Create reference to notes in Firebase Database */
    let notesRef = fire.database().ref('notes').orderByKey().limitToLast(100);
    notesRef.on('child_added', snapshot => {
      /* Update React state when note is added at Firebase Database */
      let note = {
        text: snapshot.val(),
        id: snapshot.key
      };

      this.setState({
        notes: [note, ...this.state.notes]
      });
    })
  }

  addNote = (event) => {
    event.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the note to Firebase */
    fire.database().ref('notes').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    return (
      <div className="container">
        <h1>Consumo de API</h1>
        <form onSubmit={this.addNote}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of notes */
              this.state.notes.map( note => <li key={note.id}>{note.text}</li> )
            }
          </ul>
        </form>
      </div>
    )
  }
}

export default Notes;