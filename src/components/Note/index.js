import React from 'react';
import Api from '../../utils/api';

class Note extends React.Component {
  state = {
    title: '',
    description: ''
  };

  componentDidMount() {
    Api.get(`/notes/${this.props.match.params.id}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          title: data.title,
          description: data.description,
          id: data.id
        })
      })
  }

  onSubmit = (event) => {
    event.preventDefault();
    Api.put(`/notes/${this.state.id}.json`, {
      note: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(data => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input type="text" value={this.state.title}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input type="text" value={this.state.description}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Guardar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Note;