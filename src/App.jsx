import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  // let content = <SelectedProject project={selectedProject} />;
  let content;
  switch (projectsState.selectedProjectId) {
    case null:
      content = <NewProject onAdd={handleAddProject} />;
      break;
    case undefined:
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
      break;

    default:
      content = <selectedProject project={selectedProject} />;
      break;
  }
  // if (projectsState.selectedProjectId === null) {
  //   content = <NewProject onAdd={handleAddProject} />;
  // } else if (projectsState.selectedProjectId === undefined) {
  //   content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  // }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />

      {content}
      {/* <SelectedProject project={selectedProject} /> */}
    </main>
  );
}

export default App;
