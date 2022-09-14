# Basic React Application 

### - Mini React Website. 
 
## Shoe shop

### `Home` Page

 <img src="https://user-images.githubusercontent.com/100747899/190060596-31f08133-cb55-4320-a086-273826e37574.gif">
 
 - used react-bootstrap for Navbar and Card
 - created all the shoes products with components and data-binding
 - used the Array map() method to iterate shoes components
 - created routes using react-router-dom library
 - made an ajax call using Axios library to load more items
 - plus, catch statement to handle the error  
           
```JavaScript

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
```
  
### `Detail` Page

<img src="https://user-images.githubusercontent.com/100747899/190066376-3fec7020-822f-437c-aa36-74964da9174f.gif">

 - used Lifecycle hook using useEffect
 - found out codes inside the useEffect run after html rendering
 - So, some codes that takes time should be insdie of the useEffect Hook 
 - used setTimeout function insdie of the useEffect Hook to prompt modal for 3 sec  

```JavaScript


  useEffect(() => {
    let a = setTimeout(() =>{ setAlert(false)},3000)
    return () => 
      clearTimeout(a) 
    })
```
