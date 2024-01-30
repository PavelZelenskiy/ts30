import React from "react";
import "./projectsPanel.css";
import { Link } from "react-router-dom";

export const ProjectsPanel = () => {
  return (
    <div className="projects_panel">
      <Link to="/tsdrumkit">TS Drum Kit</Link>
      <Link to="/tsclock">TS Clock</Link>
    </div>
  );
};
