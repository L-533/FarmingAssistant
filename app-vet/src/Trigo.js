import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/trigo.jpeg'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]


let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function Trigo(props){

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    let datos = { nombre: "Trigo", 
    desc:"El trigo es un cultivo anual que crece mejor en climas templados. Se cultiva en suelos bien drenados y ricos en nutrientes. El trigo se utiliza para hacer una amplia variedad de alimentos, como pan, pastas, cereales y cerveza. Es un cultivo muy importante a nivel mundial y se cultiva en muchos países. Se pueden encontrar muchas variedades diferentes de trigo, cada una con diferentes requerimientos de crecimiento.", 
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
            <li>Clima: El trigo es un cultivo de clima templado y se desarrolla mejor en una temperatura entre los 15 y 25 grados Celsius. Las heladas tardías pueden afectar el cultivo. El trigo requiere una cantidad moderada de lluvia durante el crecimiento y maduración.</li>
            <li>Suelo: El trigo prefiere suelos bien drenados, con buen contenido de materia orgánica y con un pH entre 6 y 7.5. Es importante que el suelo tenga una buena estructura para asegurar una adecuada aireación y drenaje.</li>
            <li>Siembra: La siembra del trigo se realiza mediante semillas que se plantan a una profundidad de 2 a 5 centímetros. La densidad de siembra varía entre 80 y 200 kg de semilla por hectárea. La época de siembra varía según la región, pero en general se realiza en otoño.</li>
            <li>Riego: El trigo requiere una cantidad moderada de agua, aunque es importante que la cantidad sea bien distribuida durante el ciclo del cultivo. Es recomendable realizar el riego por aspersión o goteo.</li>
            <li>Fertilización: El trigo requiere una cantidad significativa de nitrógeno, fósforo y potasio. La cantidad de fertilización debe ser ajustada de acuerdo con las necesidades del cultivo, el tipo de suelo y el clima. Es recomendable aplicar fertilizantes orgánicos y químicos.</li>
            <li>Control de plagas y enfermedades: El trigo puede ser afectado por diversas plagas y enfermedades, como el pulgón, la oruga, el mildiu y la roya. Es importante monitorear el cultivo regularmente y aplicar medidas de control preventivas y curativas.</li>
            <li>Cosecha: El trigo se cosecha cuando los granos están maduros y la humedad de los mismos es inferior al 13%. La cosecha se realiza mediante una cosechadora. Es importante evitar demoras en la cosecha para evitar pérdidas de rendimiento y calidad.</li>
            </ul>
        </div>
        </div>
    </div>
    )

}

function ProfileDog(params){
    let datos =  { nombre: "Trigo"}
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