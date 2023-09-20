import React, { useState } from "react";
import PlaneCartesian from "../Graphics/PlaneCartesian";
import Inputs from "./MicroComponents/Inputs";
import SelectBox from "./MicroComponents/SelectBox";

const Home = () => {
  // const [mostrarGrafico, setmostrarGrafico] = useState(false);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);
  const [borrar, setborrar] = useState(false);
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [restriccion11, setRestriccion11] = useState("");
  const [restriccion12, setRestriccion12] = useState("");
  const [numLimite1, setnumLimite1] = useState("");
  const [restriccion21, setRestriccion21] = useState("");
  const [restriccion22, setRestriccion22] = useState("");
  const [numLimite2, setnumLimite2] = useState("");
  const [chartData, setChartData] = useState(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
  };

  const enviarDatos = () => {
    const postData = {
      op: "maximizar",
      x1: parseFloat(valor1),
      x2: parseFloat(valor2),
      x1j1: parseFloat(restriccion11),
      x1j2: parseFloat(restriccion12),
      x2j1: parseFloat(restriccion21),
      x2j2: parseFloat(restriccion22),
      r1: parseFloat(numLimite1),
      r2: parseFloat(numLimite2),
    };

    fetch("http://127.0.0.1:8000/api/calculator/solve/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log("Respuesta de la API:", data);

        // Formatea los datos para el gráfico
        const chartData = data.resultados.Punto.map((punto, index) => ({
          Punto: punto,
          "Coordenada X (X1)": data.resultados["Coordenada X (X1)"][index],
          "Coordenada Y (X2)": data.resultados["Coordenada Y (X2)"][index],
          "Valor de la función objetivo (Z)":
            data.resultados["Valor de la función objetivo (Z)"][index],
        }));

        // Actualiza el estado con los datos del gráfico
        setChartData(chartData);
        console.log("se logró");
        // Muestra el gráfico
        setMostrarGrafico(true);
      })
      .catch((error) => {
        console.error("Error al enviar datos a la API:", error);
      });
  };

  return (
    <>
      {mostrarGrafico ? (
        <PlaneCartesian />
      ) : (
        <form
          className="flex justify-center gap-6  items-center w-full flex-col sm:flex-row sm:items-start "
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
          <div className="w-11/12 h-96 bg-opacity-70 bg-black p-6 rounded-xl  sm:w-1/2">
            <PlaneCartesian barras={3} chartData={chartData}></PlaneCartesian>
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
            setMostrarGrafico(false);
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
