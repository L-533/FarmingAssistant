import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/papa.jpeg'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]


let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function Papa(props){

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    let datos = { nombre: "Papa", 
    desc:"La papa es un cultivo originario de los Andes, que ha sido cultivado y consumido por la humanidad desde hace miles de años. Es un cultivo de gran importancia alimentaria y económica en todo el mundo, y se utiliza en una gran variedad de platos y productos procesados. Es una planta herbácea que puede alcanzar una altura de hasta 1 metro, y produce raíces tuberosas comestibles en la parte subterránea del tallo. Existen miles de variedades de papa, que se diferencian en tamaño, forma, color y sabor.", 
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
                <li>Clima: La papa es un cultivo adaptable y se puede cultivar en una amplia variedad de climas, desde regiones frías a cálidas. Sin embargo, es importante que el cultivo reciba al menos seis horas de sol al día y que las temperaturas no superen los 30 grados Celsius. La mejor temperatura para el crecimiento de la papa se encuentra entre los 15 y 20 grados Celsius.</li>
                <li>Suelo: La papa prefiere suelos sueltos y bien drenados con un pH entre 5.5 y 6.0. Es importante que el suelo tenga una buena aireación y contenga suficientes nutrientes. Es recomendable realizar un análisis de suelo antes de sembrar para determinar la cantidad de nutrientes que se necesitan y ajustar el pH del suelo si es necesario.</li>
                <li>Siembra: La papa se puede sembrar en primavera o en otoño dependiendo del clima y la región. Las semillas de papa deben plantarse en surcos o hoyos profundos de alrededor de 10 a 15 cm de profundidad, con una distancia entre plantas de alrededor de 30 cm. Las semillas deben tener al menos un ojo o brote para que puedan germinar.</li>
                <li>Riego: La papa necesita un riego regular y uniforme, especialmente durante la etapa de crecimiento activo. Es importante evitar el encharcamiento del suelo y permitir que el suelo se seque ligeramente entre riegos para evitar la aparición de enfermedades.</li>
                <li>Fertilización: La papa requiere una cantidad significativa de nutrientes, especialmente nitrógeno, fósforo y potasio. Es recomendable aplicar fertilizantes antes de la siembra y durante el cultivo, de acuerdo con las necesidades del cultivo y las características del suelo. Es importante evitar el exceso de fertilización que puede provocar el crecimiento excesivo de hojas y disminuir la calidad de los tubérculos.</li>
                <li>Control de plagas y enfermedades: La papa puede ser afectada por diversas plagas y enfermedades, como la polilla de la papa, la pulga de la papa, el gusano alambre, entre otros. Es importante monitorear el cultivo regularmente y aplicar medidas de control preventivas y curativas.</li>
                <li>Cosecha: La papa se cosecha cuando los tubérculos han alcanzado su tamaño máximo y las hojas han empezado a amarillear. La cosecha se realiza manualmente o con maquinaria y es importante tener cuidado de no dañar los tubérculos. Los tubérculos se deben almacenar en un lugar fresco y seco para evitar la aparición de enfermedades y mantener su calidad.</li>
            </ul>
        </div>
        </div>
    </div>
    )

}

function ProfileDog(params){
    let datos =  { nombre: "Papa"}
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