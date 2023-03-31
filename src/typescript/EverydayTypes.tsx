import React from "react";

let username: string = 'Jorge';
    const age : number = 38;
    const average: number = 7;
    const arr: String[] = [];
    let bigI = BigInt(8946514865148561);
    arr.push(username);
    arr.push(age.toString());
    arr.push(average.toString());

export const EverydayTypes = () => {
    
    return(
        <>
            
            <h1>EverydaysTypes</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>{average}</td>
                    </tr>
                    <tr>
                        <td>{arr}</td>
                    </tr>
                    <tr>
                        <td>bigint <script>document.write(bigI)</script></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export const FuncionSuma = () =>{
    const suma = (a: any,b :any): any =>{
        return a+b;
    }
    return(
        <div>
            <h2>Mi funcion de suma de 2+2: <small>{suma(2,2)}</small></h2>
        </div>
    )
}