import React from "react";

export default function TableBody({ nombre, apellido, bDay, deadDay, edad }) {
  return (
    <tr>
      <th scope="row">{nombre}</th>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{bDay}</td>
      <td>{deadDay}</td>
    </tr>
  );
}
