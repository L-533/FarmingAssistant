import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/arroz.jpeg'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]


let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function Arroz(props){

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    let datos = { nombre: "Arroz", 
    desc:"El arroz es un cultivo anual que crece mejor en climas cálidos y húmedos. Se cultiva en suelos aluviales con alto contenido de arcilla. Se puede plantar en tierras bajas inundadas o en tierras secas, dependiendo de la variedad y del clima. El arroz es una fuente importante de carbohidratos y se utiliza en muchos platos internacionales. Se pueden encontrar muchas variedades diferentes de arroz, cada una con diferentes requerimientos de crecimiento.", 
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
                <li>Clima: El arroz es un cultivo que se desarrolla en clima cálido y húmedo. La temperatura ideal para el crecimiento del arroz es de alrededor de 30 grados Celsius durante el día y 20 grados Celsius durante la noche. El arroz requiere una gran cantidad de agua, por lo que es importante que haya suficientes precipitaciones o que se realice riego.</li>
                <li>Suelo: El arroz crece bien en suelos arcillosos y limosos, con una buena retención de agua. El pH óptimo para el crecimiento del arroz es de 5.5 a 7.0. Es importante que el suelo tenga una buena aireación y drenaje para evitar el encharcamiento.</li>
                <li>Siembra: El arroz se siembra por lo general en la época de primavera o verano. Las semillas de arroz se pueden sembrar directamente en el campo o se pueden sembrar primero en una cama de germinación y luego trasplantar a los campos. La densidad de siembra varía entre 80 y 120 kg de semilla por hectárea.</li>
                <li>Riego: El arroz necesita una gran cantidad de agua, por lo que es importante que el cultivo se riegue adecuadamente. Se recomienda mantener el campo inundado con 5 a 10 centímetros de agua durante el período vegetativo y aumentar la cantidad de agua a medida que se acerca la madurez.</li>
                <li>Fertilización: El arroz requiere una cantidad significativa de nitrógeno, fósforo y potasio. Es importante aplicar fertilizantes de acuerdo con las necesidades del cultivo y las características del suelo. La fertilización debe realizarse en varias aplicaciones a lo largo del ciclo del cultivo.</li>
                <li>Control de plagas y enfermedades: El arroz puede ser afectado por diversas plagas y enfermedades, como el barrenador de la hoja, la plaga del tallo, la piricularia, entre otras. Es importante monitorear el cultivo regularmente y aplicar medidas de control preventivas y curativas.</li>
                <li>Cosecha: El arroz se cosecha cuando los granos están maduros y la humedad es de alrededor del 20%. La cosecha se realiza mediante una cosechadora. Es importante secar el arroz antes del almacenamiento para evitar la presencia de humedad y prevenir la aparición de hongos.</li>
            </ul>
        </div>
        </div>
    </div>
    )

}

function ProfileDog(params){
    let datos =  { nombre: "Arroz"}
    return (
    <main className="principal">
    <div className="container-fluid">

        <div className="row">
            
            <div className="card p-4 " style={{width:"450px"}}>

            <div className=" image d-flex flex-column justify-content-center align-items-center" > <button style={{width:"200px", height: "200px"}}> <img src= {logo_perro} height="200" width="200" /></button>


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