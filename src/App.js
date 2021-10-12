import Header from './components/Header'
import AddTheAccount from './components/AddTheAccount';
import AccountCard from './components/AccountCard';
import {useState} from 'react'
import PersonDetails from './components/PersonDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [jagah, setJagah] = useState([{name: 'Sharad', size: '100',}])
  const [state, setState] = useState({
    name: "",
    size: "",
  });

  function addme(e){
    e.preventDefault();
    console.log('inside addme start')
    console.log(e)
    console.log(e.target[0].value, e.target[1].value);
    setState({...state, name: e.target[0].value, size: e.target[1].value});
    setJagah([...jagah, state]);
    console.log(jagah);
    console.log('inside addme end')
  }

  return (
    <div className="App">
      <Router>
      <Header/>
      
       <Switch>
        <Route exact path = "/" component = {() => ( 
          <AddTheAccount addme = {addme} jagahe = {jagah}/>
        )} />
        
        
        {/* <Route exact path = "/det" component = {() => ( 
          <AccountCard jagahe = {jagah}/>
        )} /> */}
      <Route path = "/personDetails" component = {PersonDetails} />
      </Switch>
      {/* <AccountCard jagahe = {jagah}/> */}
      </Router>
      
    </div>
  );
}

export default App;
