import Container from "./Components/Container";
import Item from "./Components/Item";

// import Button  from "./Button";
function App(){
   let foodItems = ["Dal", "Green Veg", "Milk", "Roti", "Salad", "Ghee"]
  //  let foodItems = []
  // if(foodItems.length === 0){
  // return <h3>I AM Hungry</h3>
  // }
  // let emptyMsg = foodItems.length === 0 ? <h3>I Am Hungry</h3>:null
  return (
    <>
    <Container>
       <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.length === 0 && <h3>I AM Hungry</h3>}
      {foodItems.map((item)=> <Item fooditem = {item}/>)}
      </ul>
    </Container>
    </>
  );
  
}

export default App;