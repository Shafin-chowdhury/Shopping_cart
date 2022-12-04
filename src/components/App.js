
import './App.css';

import Title from './title/title';
import Button from './button/button';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='nav2'>
         
       <h1> Your Shopping cart</h1>
        <i class="fa-solid fa-circle-xmark"></i>
        </div>

   
        
        
        <Title name = "Farhan"/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    </div>
  );
}

export default App;
