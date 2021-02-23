import img from './ugur-img.jpeg';
import './App.css';
import Date from './components/DateComponent';

function App() {
  return (
    <div className="App">
      <div className="main">
        <img className="ugur" src={img} alt="bonus-kafa"/>
        <br/> <br/>
        <h4><span>Uğur Türkmen</span>'in Akinon'dan ayrılmasına kalan süre: </h4>
        <Date />
        <a href="https://youtu.be/NntT0-dxI4Q?t=11" target="_blank">https://www.youtube.com/watch?v=NntT0-dxI4Q</a>
      </div>
    </div>
  );
}

export default App;
