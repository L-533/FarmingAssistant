import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/cana.jpeg'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]


let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function CanaAzucar(props){

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    let datos = { nombre: "Caña de azúcar", 
    desc:"La caña de azúcar es un cultivo perenne que crece mejor en climas cálidos y húmedos. Se cultiva en suelos bien drenados y ricos en nutrientes. La caña de azúcar es una fuente importante de azúcar y se utiliza en una amplia variedad de alimentos, como refrescos, dulces y postres. También se utiliza para producir etanol y otros.", 
    cuidados:"Recomendaciones: debe plantarse en una densidad adecuada para maximizar el rendimiento, y es importante controlar las plagas y enfermedades."}
    console.log(datos.nombre)
    return(
    <div id="tabla-reportes" className="full-width">
        <div className='outer-container'>
            <b className="titulo-seccion"> Descripción</b>
            <p className="inner-content">{datos.desc}</p>
        </div>

        <div id="tabla-reportes" className="full-width">
        <div className='outer-container'>
            <b className="titulo-seccion"> Recomendaciones</b>
            <ul className="inner-content" id="lista-recomendaciones">
                <li>Clima: La caña de azúcar requiere un clima cálido y húmedo para crecer. Las temperaturas óptimas oscilan entre los 20 y 30 grados Celsius y se necesita una cantidad significativa de lluvia durante la temporada de crecimiento. El cultivo puede ser afectado por heladas o sequías.
                <li>Suelo: La caña de azúcar prefiere suelos bien drenados y ricos en nutrientes. La acidez del suelo también es importante y debe estar dentro del rango adecuado para el crecimiento del cultivo. La preparación del suelo antes de la siembra es importante para asegurar un buen establecimiento del cultivo.</li>
                <li>Siembra: La siembra de la caña de azúcar se realiza por medio de esquejes de caña o plantas que han sido cortadas. Los esquejes se deben plantar a una profundidad de 10 a 15 centímetros y con una separación de 1 a 1,5 metros entre las plantas. Es importante evitar la compactación del suelo durante la siembra y el establecimiento del cultivo.</li>
                <li>Riego: La caña de azúcar requiere una cantidad significativa de agua para crecer. El riego debe ser programado y ajustado de acuerdo con la etapa de crecimiento del cultivo y las condiciones climáticas.</li>
                <li>Fertilización: La fertilización es importante para obtener un buen rendimiento del cultivo. La caña de azúcar requiere una cantidad significativa de nitrógeno, fósforo y potasio. El momento y la cantidad de fertilización deben ser ajustados de acuerdo con la etapa de crecimiento del cultivo.</li>
                <li>Control de plagas y enfermedades: La caña de azúcar puede ser afectada por una amplia variedad de plagas y enfermedades. Es importante realizar monitoreo regular del cultivo y aplicar medidas de control preventivas y curativas de acuerdo con las necesidades del cultivo.</li>
                <li>Cosecha: La caña de azúcar se cosecha cuando las hojas comienzan a secarse y la caña ha alcanzado su madurez. La cosecha puede ser manual o mecanizada. Es importante manejar la caña de azúcar con cuidado durante la cosecha para evitar daños al cultivo.</li></li>
            </ul>
        </div>
        </div>
    </div>
    )

}

function ProfileDog(params){
    let datos =  { nombre: "Caña de azúcar"}
    return (
    <main className="principal">
    <div className="container-fluid">

        <div className="row">
            
            <div className="card p-4 " style={{width:"450px"}}>

            <div className=" image d-flex flex-column justify-content-center align-items-center" > <button  style={{width:"200px", height: "200px"}}> <img src= {logo_perro} height="200" width="200" /></button>


                <span className="name mt-3">{datos.nombre}</span> 
                <div className="text mt-3"> <span>{datos.desc}</span> </div>
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
            </div>
        </div>
    </div>
    </div>
    </main>
    )
}

var mascotas = {
    usuario: "juliangarciaduarte@gmail.com",data: { nombre: "Fredo", desc:"Beagle, 7 años y muy hermoso", cuidados:"Fredo debe ser tratado con medicamentos especiales para hemoparasitos, mas especificamente Erliquia", registros:[["Andres Camacho", "12-12-2021"], ["Andres Camacho", "16-06-2021"], ["Maria Rueda", "01-01-2021"]]},
    usuario:"cristian@gmail.com", data: {nombre:"Katty", desc:"Gata 3 años, muy alegre y juguetona", cuidados:"Katty no presenta condiciones especiales", registros:[["Mario Arboleda", "12-02-2021"]]}
  }