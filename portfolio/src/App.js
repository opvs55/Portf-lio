import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";






//contexto global
const context = {

}

function App() {
  return (
    <>
      <GlobalContext.Provider value={context}>
        <BrowserRouter>
          <h1>test123</h1>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
