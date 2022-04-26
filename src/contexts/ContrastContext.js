import React from 'react'

export const ContrastContext = React.createContext()

export const ContrastProvider = ({ children }) => {
   const [contrastMode , setContrastMode] = React.useState(false)
   
  return (
    <ContrastContext.Provider value={{contrastMode,setContrastMode}}>
      {children}
    </ContrastContext.Provider>
  )
}
