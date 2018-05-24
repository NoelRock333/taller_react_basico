import React from 'react';
import Api from '../../utils/api';
import Item from './Item';

class Notes extends React.Component {
  state = {
    title: '',
    description: '',
    notes: []
  }

  componentDidMount() {
    Api.get('/notes.json')
      .then(data => data.json())
      .then(data => {
        this.setState({
          notes: data
        })
      })
  }

  onSubmit = (event) => {
    event.preventDefault();
    Api.post('/notes.json', {
      note: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(data => data.json())
    .then(data => {
      this.setState({
        notes: [...this.state.notes, data]
      })
    });
  }

  deleteNote = (event) => {
    event.preventDefault();
    let id = event.target.dataset.id;
    Api.delete(`/notes/${id}.json`)
      .then(data => {
        this.setState({
          notes: this.state.notes.filter(item => `${item.id}` !== `${id}`)
        })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Consumo de API</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="titulo"
            onChange={(ev) => this.setState({ title: ev.target.value })}
          />
          <input
            type="text"
            value={this.state.description}
            placeholder="descripcion"
            onChange={(ev) => this.setState({ description: ev.target.value })}
          />
          <button className="btn btn-primary">Guardar</button>
        </form>
        <div>
          {this.state.notes.map(note => {
            return (
              <Item note={note} key={note.id} deleteNote={this.deleteNote} />
            ) 
          })}
        </div>
      </div>
    );
  }
}

export default Notes;