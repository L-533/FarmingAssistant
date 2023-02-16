import React from 'react'
import index_1 from './imgs/index_6.jpeg'
import index_2 from './imgs/index_7.jpg'
import index_3 from './imgs/index_8.jpg'
import index_4 from './imgs/index_6.png'
import './css/estilos_PerfilM.css';



export default function Home(){
    return(
        <div className="container-fluid">
			
        <div>
         <img id="index_4" src={index_4} />

       </div>

   <div className="row">
        <div className="col-md-4">
				<div className="barraiz">
                
                 <h5> <br/><br/> Quienes somos</h5>
                 
                <h3>
				Considerando que entre las numerosas labores que determinan el rendimiento de un cultivo, la siembra y escarda son de las principales, desarrollamos un software que permite planificar y llevar control de estas actividades fundamentales cuyo objetivo principal es ser en una herramienta práctica y útil que brinde mayor bienestar a los agricultores.
                </h3>

				</div>
			</div>



            <div className="col-md-8">
				<div className="barramedio">
					<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
						  <ol className="carousel-indicators" >
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner"  >
						    <div className="carousel-item active" >
						      <img id="imgI" src={index_1} className="d-block w-100" alt="..." />
						  </div>
						    <div className="carousel-item">
						      <img id="imgI"src={index_2} className="d-block w-100" alt="..." />
						  	</div>
						    <div className="carousel-item">
						      <img id="imgI" src={index_3} className="d-block w-100" alt="..." />
						    </div>
  						</div>
  						
					</div>

				</div>
			</div>



       </div>
</div>











    )   
}