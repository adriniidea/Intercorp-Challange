import React from "react";
import TableHeader from "./TableHeader";
import TableBodyField from "./TableBodyField";
import { getMediaAge } from "../../helper";

export default function ClientTable({ clients }) {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <table className="table border">
        <TableHeader />
        <tbody>
          {clients.length < 1 ? (
            <h1 className="text-center">Cargando..</h1>
          ) : (
            clients.map((client) => (
              <TableBodyField
                key={client.id}
                nombre={client.nombre}
                apellido={client.apellido}
                edad={client.edad}
                bDay={client.bDay}
                deadDay={client.deadDay}
              />
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex w-100">
        <div class="card w-100">
          <div class="card-header text-center">Promedio de edad</div>
          <h1 className="text-center">{getMediaAge(clients)}</h1>
        </div>
      </div>
    </div>
  );
}
