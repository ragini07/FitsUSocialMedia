import React from 'react';
import { SuggestionBar ,Header} from "../index";

function MainContainer({children}) {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export  {MainContainer}