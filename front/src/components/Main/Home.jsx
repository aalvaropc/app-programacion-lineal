import React, { useState } from "react";

import PlaneCartesian from "../Graphics/PlaneCartesian";
import Inputs from "./MicroComponents/Inputs";
import SelectBox from "./MicroComponents/SelectBox";

const Home = () => {
  const [mostrarGrafico, setmostrarGrafico] = useState(false);
  const [borrar, setborrar] = useState(false);
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [restriccion11, setRestriccion11] = useState("");
  const [restriccion12, setRestriccion12] = useState("");
  const [numLimite1, setnumLimite1] = useState("");
  const [restriccion21, setRestriccion21] = useState("");
  const [restriccion22, setRestriccion22] = useState("");
  const [numLimite2, setnumLimite2] = useState("");
  const manejarEnvio = (e) => {
    e.preventDefault();
  };
  const enviarDatos = () => {
    setmostrarGrafico(true);
    console.log(valor1, "valor1 ");
    console.log(valor2, "valor 2 ");
  };
  return (
    <>
      {mostrarGrafico ? (
        <> </>
      ) : (
        <form
          className="flex justify-center gap-6 flex-wrap items-start w-full "
          onSubmit={manejarEnvio}
        >
          <div className="flex items-center justify-center h-full">
            <SelectBox borrar={borrar} setborrar={setborrar}></SelectBox>
          </div>

          <div className="flex items-center justify-center gap-4 flex-col">
            <h1 className="text-white">Variables</h1>
            <Inputs
              placeholder={"X1"}
              label={"X1"}
              borrar={borrar}
              setborrar={setborrar}
              value={valor1}
              setValue={setValor1}
            ></Inputs>
            <Inputs
              placeholder={"X2"}
              label={"X2"}
              borrar={borrar}
              setborrar={setborrar}
              value={valor2}
              setValue={setValor2}
            ></Inputs>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <h1 className="text-white">Restricción Uno</h1>
            <Inputs
              placeholder={"X1"}
              label={"X1"}
              borrar={borrar}
              setborrar={setborrar}
              value={restriccion11}
              setValue={setRestriccion11}
            ></Inputs>
            <Inputs
              placeholder={"X2"}
              label={"X2"}
              borrar={borrar}
              setborrar={setborrar}
              value={restriccion12}
              setValue={setRestriccion12}
            ></Inputs>
            <Inputs
              placeholder={"X2"}
              label={"Número Limite"}
              borrar={borrar}
              setborrar={setborrar}
              value={numLimite1}
              setValue={setnumLimite1}
            ></Inputs>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <h1 className="text-white">Restricción Dos</h1>
            <Inputs
              placeholder={"X1"}
              label={"X1"}
              borrar={borrar}
              setborrar={setborrar}
              value={restriccion21}
              setValue={setRestriccion21}
            ></Inputs>
            <Inputs
              placeholder={"X2"}
              label={"X2"}
              borrar={borrar}
              setborrar={setborrar}
              value={restriccion22}
              setValue={setRestriccion22}
            ></Inputs>
            <Inputs
              placeholder={"X2"}
              label={"Número Limite"}
              borrar={borrar}
              setborrar={setborrar}
              value={numLimite2}
              setValue={setnumLimite2}
            ></Inputs>
          </div>
        </form>
      )}

      <div className="flex items-center justify-center w-full ">
        {mostrarGrafico ? (
          <div className="w-1/2 h-96 bg-opacity-70 bg-black p-6 rounded-xl ">
            <PlaneCartesian barras={3}></PlaneCartesian>
          </div>
        ) : (
          <div className="w-48 text-center m-auto ">
            <img
              src="./pablo.webp"
              alt=""
              className="rounded-3xl mb-8 m-auto"
            />
            <label className="text-white ">Sospechoso</label>
          </div>
        )}
      </div>
      <div className="flex gap-3 w-full justify-center">
        <button
          onClick={enviarDatos}
          className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-900 duration-500 w-fit shadow-2xl "
        >
          Evaluar
        </button>
        -{" "}
        <button
          onClick={() => {
            setborrar(true);
            setmostrarGrafico(false);
          }}
          className="bg-red-500 p-3 rounded-2xl hover:bg-red-900 duration-500 w-fit shadow-2xl "
        >
          Borrar
        </button>
      </div>
    </>
  );
};

export default Home;
