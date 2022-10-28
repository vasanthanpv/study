import './App.css';
import Expenseitem from './components/Expenseitem';
import ExpenseForm from './components/ExpenseForm';
import Fetchmovie from './components/Fetchmovie';
function App() {
  const expenses =[
    {id:1,name:'car',price:6555,date:new Date(2022,10,5)},
    {id:2,name:'bus',price:4343,date:new Date(2022,10,10)},
    {id:3,name:'truck',price:34333,date:new Date(2021,3,10)}
  ]
  return (
    <div className="App">
      <h2>Vasanthan</h2>
      <Fetchmovie />
      <ExpenseForm />
      <Expenseitem items={expenses}></Expenseitem>
    </div>
  );
}

export default App;
