import React from "react";
import Contador from "./Contador";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { EverydayTypes, FuncionSuma } from "../typescript/EverydayTypes";
import ContadorConCustomHook from "./ContadorConCustomHook";
import Personajes from "./Personajes";
const MainHooks = ()=>{
    return(

        <div>
            <h1>Welcome to MainHooks</h1>
            <hr/>
            <Contador/>
            <hr/>
            <ContadorConCustomHook/>
            <hr/>
            <EverydayTypes/>
            <hr/>
            <FuncionSuma/>
            <hr/>
            <Personajes/>
        </div>
    )
}
export default MainHooks;