import React from "react";
import { DrumKit } from "../components/DrumKit/DrumKit";
import { TsClock } from "../components/Clock/TsClock";
import { Route, Routes } from "react-router-dom";
import { ProjectsPanel } from "../components/ProjectsPanel/ProjectsPanel";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsPanel />} />
      <Route path="/tsdrumkit" element={<DrumKit />} />
      <Route path="/tsclock" element={<TsClock />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
