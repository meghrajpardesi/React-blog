import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Container from './components/Container';

class  App extends Component {
  render(){

  
  return (
    <div className="App">
    <Navbar />


 <Header/>

  {
    //<!-- Main Content -->
  }
 
  <Container />
  <hr/>
{
  //  <!-- Footer -->
}

 <Footer/>

    </div>
  );
}
}

export default App;
