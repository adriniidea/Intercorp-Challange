import React, { useEffect, useState } from "react";
import ClientTable from "./Table";
import { db } from "../../service";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const data = collection(db, "clients");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setClients(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const goBack = () => navigate(-1);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className="text-center my-5">Cargando...</h1>
      ) : (
        <>
          <div className="d-flex justify-content-evenly align-items-center">
            <div>
              <button onClick={goBack} className="btn btn-link">
                Volver
              </button>
            </div>
            <h1 className="text-uppercase text-center my-5">
              Lista de Clientes
            </h1>
          </div>
          <ClientTable clients={clients} />
        </>
      )}
    </div>
  );
}
