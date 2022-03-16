import React, {useContext} from "react";
import {CheckContext} from "./Questions"
import { Button } from "./Button";

const Submit = (props) => {
  const [check] = useContext(CheckContext)

  return(
    <>
      <Button onClick = {() => props.clicked()} variant="outlined" pill className="my-button" type="submit" disabled={check ? false : true}>Valider</Button>
    </>
  )
}

export default Submit;