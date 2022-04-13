import Header from "../src/components/Header/Header"
import Description from "../src/components/Description/Description"
import Form from "../src/components/Form/Form"
import Card from "../src/components/Card/Card"
import Footer from "../src/components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Description/>
      <Card title= "Esperienze Lavorative" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus id magna eu augue pulvinar imperdiet vel malesuada mi. 
                Vestibulum eu vestibulum nulla."/>
      <Card title= "Lingue" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus id magna eu augue pulvinar imperdiet vel malesuada mi. 
                Vestibulum eu vestibulum nulla."/>
      <Card title= "Hobby" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus id magna eu augue pulvinar imperdiet vel malesuada mi. 
                Vestibulum eu vestibulum nulla."/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
