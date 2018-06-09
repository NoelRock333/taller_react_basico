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
      <div>
        <h1>Consumo de API</h1>
        <div className="row">
          <form onSubmit={this.onSubmit} className="col-sm-5 mb-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.title}
                placeholder="Titulo"
                onChange={(ev) => this.setState({ title: ev.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                value={this.state.description}
                placeholder="Descripcion"
                onChange={(ev) => this.setState({ description: ev.target.value })}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
        <div className="list-group">
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