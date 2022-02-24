import React, { useEffect } from "react";
import { Paper } from "@mui/material";

const Deploy = ({ deploy }) => {
  useEffect(() => {
    deploy();
  }, []);

  return <Paper elevation={8}>Deploy</Paper>;
};

export default Deploy;
