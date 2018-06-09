import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ note, index, deleteNote }) => {
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{note.title}</h5>
      </div>
      <p class="mb-1">{note.description}</p>
      <div className="text-right">
        <a href="" data-id={note.id} onClick={deleteNote} className="btn btn-danger mr-1">Eliminar</a>
        <Link to={`/note/${note.id}`} className="btn btn-primary">Editar</Link>
      </div>
    </div>
  );
}

export default Item;