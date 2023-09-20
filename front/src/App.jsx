// import { useState } from "react";
// import Home from "./components/Main/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="h-screen flex flex-col justify-between">
//       <Header></Header>
//       <div className="flex-col items-center flex gap-8 pt-6 ">
//         <Home></Home>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;





import { useState, useEffect } from "react";
import Home from "./components/Main/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [postData, setPostData] = useState({
    op: "maximizar",
    x1: 4,
    x2: 6,
    x1j1: 2,
    x1j2: 3,
    x2j1: 4,
    x2j2: 8,
    r1: 10,
    r2: 4,
  });
  const [response, setResponse] = useState(null);

  const sendPostDataToAPI = () => {
    fetch("http://127.0.0.1:8000/api/calculator/solve/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Al recibir la respuesta de la API, actualiza el estado de respuesta
        console.log(data)
        setResponse(data);
      })
      .catch((error) => {
        console.error("Error al enviar datos a la API:", error);
      });
  };

  useEffect(() => {
    // Realiza la solicitud POST cuando postData cambia
    if (postData) {
      sendPostDataToAPI();
    }
  }, [postData]);

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header></Header>
      <div className="flex-col items-center flex gap-8 pt-6 ">
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
