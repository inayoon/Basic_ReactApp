import {useState} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'



function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail/0') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              { shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i}></Card>              
              })}
            </div>
          </div>  
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              console.log(result.data) 
              let copy = [...shoes, ...result.data];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('Failed to get data')
            })
          }}>More</button>
          </>        
        } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
