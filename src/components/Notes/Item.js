import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ note, index, deleteNote }) => {
  return (
    <div>
      <div>
        <b>titulo: </b><span>{note.title}</span>
        <br/>
        <b>descripción: </b><span>{note.description}</span>
      </div>
      <a href="" data-id={note.id} onClick={deleteNote}>Eliminar</a>
      <Link to={`/note/${note.id}`}>Editar</Link>
    </div>
  );
}

export default Item;