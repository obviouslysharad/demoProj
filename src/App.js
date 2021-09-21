import Header from './components/Header'
import AddTheAccount from './components/AddTheAccount';
import AccountCard from './components/AccountCard';
import {useState} from 'react'
import PersonDetails from './components/PersonDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [jagah, setJagah] = useState([])

  function addme(e){
    console.log('inside addme start')
    console.log(e)
    setJagah([...jagah, e]);
    console.log(jagah);
    console.log('inside addme end')
  }

  return (
    <div className="App">
    <Header/>
    <AddTheAccount addme = {addme}/>
    <AccountCard jagahe = {jagah}/>
      {/* <Router>
      <Header/>
       <Switch>
        <Route path = "/" component = {() => ( 
          <AddTheAccount addme = {addme}/>
        )} />
        <Route path = "/" component = {() => ( 
          <AccountCard jagahe = {jagah}/>
        )} />
      <Route path = "/personDetails" component = {PersonDetails} />
      </Switch>
      </Router> */}
    </div>
  );
}

export default App;
