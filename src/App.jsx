import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import FloatingLines from "./components/FloatingLines";
import MagicBento from "./components/MagicBento";

import Chest from "./Pages/Chest";
import Shoulder from "./Pages/Shoulder";
import Biceps from "./Pages/Back";
import Leg from "./Pages/Leg";
import Triceps from "./Pages/Triceps";
import AbsForArms from "./Pages/Absforarms";


function App() {
  return (
    <BrowserRouter>
      {/* Background only */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive
          parallax
          linesGradient={["#ff66ff", "#6a5cff"]}
        />
        
      </div>

      {/* Foreground Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MagicBento />
            </div>
          }
        />
        <Route path="/chest" element={<Chest />} />
        <Route path="/shoulder" element={<Shoulder />} />
        <Route path="/biceps" element={<Biceps />} />
        <Route path="/leg" element={<Leg />} />
        <Route path="/triceps" element={<Triceps />} />
        <Route path="/absforarms" element={<AbsForArms />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
