import './App.scss';
import data from './data/single-sample';
import Card from './components/card';
function App() {
  const select = () => {
    return alert('select')
  }
  return (
    <div className="App">
      <div className="container p-3">
        <Card data={data} select={select}/>
      </div>
    </div>
  );
}

export default App;
