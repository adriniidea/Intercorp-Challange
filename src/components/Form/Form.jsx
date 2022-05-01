import React, { useState } from "react";
import { fields } from "./config/index";
import { calcDeadDay, emptyFields } from "../helper";
import Field from "./Field";
import { addDoc, collection } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { db } from "../../service/index";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    bDay: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad,
      bDay: data.bDay,
      deadDay: calcDeadDay(data.bDay),
    };
    addFireStore({ info });
  };

  const addFireStore = async ({ info }) => {
    setLoading(true);
    try {
      const col = collection(db, "clients");
      await addDoc(col, info);
      setLoading(false);
      alert("se agrego con exito");
      setData({
        nombre: "",
        apellido: "",
        edad: "",
        bDay: "",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div classNameName="container vh-100 d-flex flex-column">
      <h1 className="my-5 text-center text-uppercase"> crear cliente</h1>
      <form onSubmit={onSubmit} className="w-50 mx-auto mt-5">
        {fields.map((field, index) => (
          <Field
            name={field.name}
            type={field.type}
            label={field.label}
            min={field.min && field.min}
            max={field.max && field.max}
            value={data[field.name]}
            handleChange={handleChange}
          />
        ))}
        <button
          disabled={loading || !emptyFields(data)}
          type="submit"
          className="btn btn-primary w-100"
        >
          {loading ? <Spinner /> : "Crear"}
        </button>
        <button
          type="button"
          onClick={goBack}
          className="btn btn-dark my-2 w-100"
        >
          Volver
        </button>
      </form>
    </div>
  );
}
