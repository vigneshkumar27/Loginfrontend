import { Link } from "react-router-dom";

import Axios from "axios";

const Home=()=>{
  const getjoke =async()=>{
      const url = "https://catfact.ninja/fact"
      await Axios.get(url).then((res)=>{
        console.log(res.data);
      })
  }
    return(
        <>
       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/8523531/pexels-photo-8523531.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </>
    )
}

export default  Home;