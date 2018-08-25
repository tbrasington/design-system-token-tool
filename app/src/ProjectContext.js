import React from 'react'
export const ProjectContext = React.createContext({
  projectData: {},
  projectIsOpen: false,
  openProject: () => {},
  closeProject: () => {},
  openToken: () => {},
  closeToken: () => {},
  openStyle: () => {},
  closeStyle: () => {},
});