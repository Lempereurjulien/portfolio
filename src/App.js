import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home/Home';
function App() {
  return (
    <div class="parent">
<div class="div1"> 
  <Navbar></Navbar>
</div>
<div class="div2">
<Home></Home>
</div>
</div>
  );
}

export default App;
