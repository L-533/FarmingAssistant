import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/tomate.jpeg'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]


let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function Tomate(props){

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    let datos = { nombre: "Tomate", 
    desc:"El tomate es una planta anual perteneciente a la familia de las Solanáceas, originaria de América Central y del Sur. Es un cultivo muy popular en todo el mundo, apreciado por su sabor y versatilidad en la cocina. Es una hierba perenne que se cultiva como anual. Puede crecer hasta una altura de 1 a 3 metros, dependiendo de la variedad, y produce un fruto comestible, la baya, que se utiliza en una amplia variedad de platos, desde ensaladas hasta salsas y sopas.", 
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
                <li>Clima: El tomate es un cultivo de clima cálido, que requiere temperaturas cálidas durante el día y frescas durante la noche. La temperatura ideal para el crecimiento de los tomates es entre 20 y 30 grados Celsius. Los tomates también requieren al menos 6 horas de sol directo al día.</li>
                <li>Suelo: El tomate requiere un suelo bien drenado con buen contenido de materia orgánica. Un pH del suelo entre 6 y 7 es ideal para el cultivo de tomate. Es importante evitar el suelo salino, ya que los tomates son sensibles a la sal.</li>
                <li>Siembra: Los tomates se pueden sembrar en almácigos o directamente en el suelo. Es recomendable sembrar los tomates en primavera. Es importante mantener una distancia de 30 a 45 cm entre plantas para permitir un adecuado desarrollo de las raíces.</li>
                <li>Riego: El tomate requiere un riego regular y uniforme, especialmente durante la etapa de crecimiento activo. Es importante evitar el encharcamiento del suelo, que puede provocar el desarrollo de enfermedades. El riego por goteo es una buena opción para mantener el suelo húmedo sin saturarlo.</li>
                <li>Fertilización: El tomate es un cultivo exigente en nutrientes, especialmente en nitrógeno, fósforo y potasio. Es recomendable aplicar fertilizantes antes de la siembra y durante el cultivo, de acuerdo con las necesidades del cultivo y las características del suelo. El exceso de fertilización puede provocar el crecimiento excesivo de hojas y disminuir la calidad de los frutos.</li>      
                <li>Control de plagas y enfermedades: El tomate puede ser afectado por diversas plagas y enfermedades, como la mosca blanca, el gusano cogollero, entre otros. Es importante monitorear el cultivo regularmente y aplicar medidas de control preventivas y curativas. También se pueden utilizar métodos de control biológico, como la liberación de insectos benéficos.</li>    
                <li>Tutorado: Los tomates son plantas trepadoras y pueden alcanzar una altura de hasta 2 metros. Es recomendable colocar tutores para guiar el crecimiento de las plantas y evitar que se rompan las ramas.</li>
                <li>Cosecha: Los tomates se cosechan cuando han alcanzado su tamaño y color maduro. Es importante tener cuidado de no dañar los frutos durante la cosecha. Los tomates maduros pueden durar varios días en el refrigerador.</li>
            </ul>
        </div>
        </div>
    </div>
    )
        
}

function ProfileDog(params){
    let datos =  { nombre: "Tomate"}
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