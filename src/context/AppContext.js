import React, {useState} from 'react';

export const AppContext = React.createContext({visible: true});

export default function AppContextProvider(props) {
  const [posted, setPosted] = useState(false);

  const updateFeed = () => {
    setPosted(!posted);
  }

  return (
    <AppContext.Provider value={{posted, updateFeed}}>
      {props.children}
    </AppContext.Provider>
  )
}