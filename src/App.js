import './App.scss';
import data from './data/single-sample';

function App() {
  const select = () => {
    return alert('select')
  }
  return (
    <div className="App">
      <div className="container p-3">
        {
    <div className="col-md-3 col-12">
      <div className="card">
        <img src={data.album.images[1].url} className="card-img-top" alt="imagealbum"/>
        <div className="card-body">
          <h5 className="card-title">{data.album.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.name}</h6>
          <button onClick={select} type='button' className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
    </div>
        }

      </div>
    </div>
  );
}

export default App;
