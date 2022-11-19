import Box from "@mui/material/Box";
import React from "react";
export interface CenterProps {
  children?: React.ReactNode
}
const Center: React.FC<CenterProps> = (props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight= "100vh" >
      {props.children}
    </Box>
  )
}

export default Center;