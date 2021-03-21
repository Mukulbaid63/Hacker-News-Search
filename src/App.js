import { useEffect, useState } from 'react';
import './App.css';
import QueryInput from './components/QueryInput';
import QueryOutput from './components/QueryOutput';


function App() {
  const [query,setquery]=useState("");
  const [result, setresult] = useState([]);
  const [selectState, setSelectState] = useState("");

  const fetchQuery =()=>{
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=${selectState}&hitsPerPage=1000`)
    .then((response)=>
      response.json()
    ).then((r)=>{setresult((p)=>{

      return r.hits;
    }
      
      
      
      )})
  }
  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=`)
    .then((response)=>
      response.json()
    ).then((r)=>{setresult((p)=>{

      return r.hits;
    }
      
      
      
      )})
   
  }, [])
  return (
    <div className="App">
      <QueryInput selectState={selectState} setSelectState={setSelectState} query={query} 
    setquery={setquery}
    fetchQuery={fetchQuery}/>
    <QueryOutput result={result} query={query} setresult={setresult}/>
    </div>
  );
}

export default App;
