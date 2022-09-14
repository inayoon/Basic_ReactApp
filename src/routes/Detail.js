import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail(props){

  useEffect(() =>{
    console.log('안녕');
  })
  let {id} = useParams();
  let found = props.shoes.find(x => x.id == id);

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  useEffect(() => {
    let a = setTimeout(() =>{ setAlert(false)},5000)
    return () => 
      clearTimeout(a) 
    })


  return(
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">Free Delivery Order within 30min</div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{found.title}</h4>
          <p>{found.content}</p>
          <p>{found.price}</p>
          <button className="btn btn-danger">Buy now</button> 
        </div>
      </div>
    </div>      
  )
};

export default Detail;