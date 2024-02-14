import React from "react";
import { DrumKit } from "../components/DrumKit/DrumKit";
import { TsClock } from "../components/Clock/TsClock";
import { Route, Routes } from "react-router-dom";
import { ProjectsPanel } from "../components/ProjectsPanel/ProjectsPanel";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { VariablesCSS } from "../components/VariablesCSS/VariablesCSS";
import { ArrayMethods } from "../components/ArrayMethods/ArrayMethods";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsPanel />} />
      <Route path="/tsdrumkit" element={<DrumKit />} />
      <Route path="/tsclock" element={<TsClock />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/tsvariablescss" element={<VariablesCSS />} />
      <Route path="/tsarraymethods" element={<ArrayMethods />} />
    </Routes>
  );
};

export default App;
