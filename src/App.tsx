import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
     const classes = useStyles();
     return (
          <div className="App">
               <Header />
          </div>
     );
}