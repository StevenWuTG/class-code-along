
import './App.css';
import BlogsList from './Containers/BlogsList';
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      <Counter counter={0}/>
      <BlogsList />
    </div>
  );
}

export default App;
