import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  const array = [0,1,2,3,4,5,6,7,8,9,10];
  return (
    array.map((elemeto) => Task(elemeto))
  );
}

export default App;
