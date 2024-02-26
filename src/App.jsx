import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    console.log("click!");
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  switch (projectsState.selectedProjectId) {
    case null:
      content = <NewProject />;
      console.log(content);
      break;
    case undefined:
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
      console.log(content);
      break;

    default:
      break;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />

      {content}
    </main>
  );
}

export default App;
