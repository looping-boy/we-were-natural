import React, {useContext} from "react";
import {CheckContext} from "./Questions"

const Submit = () => {
  const [check] = useContext(CheckContext)

  return(
    <>
      <button type="submit" disabled={check ? false : true}>Submit</button>
    </>
  )
}

export default Submit;