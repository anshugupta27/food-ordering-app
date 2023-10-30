
import { useState, useEffect } from 'react';
import './App.css';
import BodyComp,{BodyComp1 as Sarthak,BodyComp2} from './components/body';
import HeaderComp from './components/header';
import footerComp from './components/footer';
// Header - Logo Nav items Search
// Body - ResturantCard (image, rating, food, delvery time, price for)
// Footer - copyrights, links, adress, contact

function App() {
  const[userName, setUserName] = useState("No User");
  console.log("outside useEffect")
  // console.log("username", userName)
  useEffect(()=>{
    console.log("inside use Effect")
    const apiRes = "true" 
    if (apiRes === 'true')
    setUserName("ishwari")
  })

  return (
    <div className="App">
      {/* <button onClick={()=>userNameHandler()}>Login</button> */}
      <HeaderComp name={userName}></HeaderComp>
      <BodyComp name={userName}> this is inside opening closing tags  </BodyComp>
      <footerComp name={userName}></footerComp>
    </div>
  );
}


export default App;
