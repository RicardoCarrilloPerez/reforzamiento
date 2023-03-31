import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//Funcion para actualizar contador



const Contador = () =>{
    
    const[count,setCount] = useState(0);
    
    const updateCount = (newValue:number = 1) =>{
        setCount((value) => value + newValue)
    }
    
    return(
        <div>
            <h2>Contador: <small>{count}</small></h2>    
            <button className='btn btn-primary m-2'onClick={() => updateCount(2)}>Incrementar</button>
            <button className='btn btn-danger'onClick={() => updateCount(-2)}>Decrementar</button>
        </div>
    )
}


export default Contador;

