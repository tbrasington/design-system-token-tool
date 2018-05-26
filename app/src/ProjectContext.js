import React from 'react'
export const ProjectContext = React.createContext({
  projectData: {},
  openProject: () => {},
  closeProject: () => {},
  openToke: () => {},
  closeToken: () => {},
  openStyle: () => {},
  closeStyle: () => {},
});