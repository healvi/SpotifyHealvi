import './App.scss';
import data from './data/all-sample';
import Card from './components/card';
function App() {
  const select = () => {
    return alert('select')
  }
  const datas = data.map((v) => <Card key={v.id} data={v} select={select}/>)
  return (
    <div className="App">
      <div className="container p-3">
        <div className="row">
        {datas}
        </div>
      </div>
    </div>
  );
}

export default App;
