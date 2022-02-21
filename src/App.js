
import "./miCss.css";
import imagen from "./imagen/rey_atanagildo.png";
import imagen1 from "./imagen/rey_ataulfo.png";
import imagen2 from "./imagen/rey_ervigio.png";
import imagen0b from "./imagen/rey_incognito.png";
import { isElementOfType } from "react-dom/test-utils";



function App() {
  
  function cambiar(e){
    if (e.target.innerHTML === "Visto"){
      e.target.innerHTML = ""
    }
    if (e.target.innerHTML === nombres[0] ||e.target.innerHTML === nombres[1] ||e.target.innerHTML === nombres[2]){
      e.target.innerHTML = "Visto"
    }
    }  

    const cambiarImagen= (e)=>{
    if (e.target.src.includes("incognito")){
      e.target.style.visibility = "hidden"
    
    }
    else { e.target.src=imagen0b

    }
    e.target.parentNode.style.backgroundColor = "transparent";
    e.target.parentNode.style.borderColor = "transparent";

     
    }
    
  let nombres=["Atanagildo","Ataulfo","Ervigio"]
  
  return (
    <div className="contenedor">
     <div className='caja' onClick={cambiar}>
       <img onClick= {cambiarImagen}src={imagen}/>
       <div className="nombre">{nombres[0]}</div>     
       </div>
       <div className='caja' onClick={cambiar}>
       <img onClick={cambiarImagen} src={imagen1}/>
       <div className="nombre">{nombres[1]}</div>     
       </div>
       <div className='caja'onClick={cambiar} >
       <img onClick={cambiarImagen}src={imagen2}/>
       <div className="nombre">{nombres[2]}</div>     
       </div>
       </div>
  );
}

export default App;
