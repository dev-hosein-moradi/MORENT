import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

const Main = lazy(() => import("./page/main/Main"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
  1--> add router, add lazy loading, add suspense and fallback,
  2--> build loading page
  3--> build not found page
  4--> 
*/
