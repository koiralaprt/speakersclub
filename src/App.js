import React,{ useEffect, useState } from 'react';
import './App.css';
import Hosts from './pages/hosts';
import Day from './pages/day';
import Questions from './pages/questions';
import Button from './components/button';
import data from './data.json'

const pagemap = {
  0: Header,
  1: Hosts,
  2: Day,
  3: Questions
}

const thisDay = new Date().toISOString().split('T')[0].replaceAll('-', '/');

function App() {

  const [page, setPage] = useState(0)
  const Component = pagemap[page];
  const [usedQuestions, setUsedQuestions] = useState([]);

  useEffect(() => {
    const questionsInLS = localStorage.getItem(thisDay);
    if (questionsInLS) {
      const q = JSON.parse(questionsInLS);
      setUsedQuestions(q);
    }
  }, [])

  const updateUsedQuestions = id => {
    const newUsedQns = [...usedQuestions,id]
    setUsedQuestions(prev => [...prev, id])
    localStorage.setItem(thisDay, JSON.stringify(newUsedQns));
  }

  return (
    <div className="App">
      <Component page={page} data={data} updateUsedQuestions={updateUsedQuestions} usedQuestions={usedQuestions} />
      {page !== 3 && page !== 0 && <div style={{ position: 'absolute', left: '10px', bottom: '10px', cursor: 'pointer' }} onClick={() => setPage(page > 0 ? page - 1 : 0)}>
        Go back
      </div>}
      {page !== 3 && <div style={{ position: 'absolute', right: '10px', bottom: '10px' }}><Button text="Next" onClick={() => setPage(page < 3 ? page + 1 : page)} /></div>}
    </div>
  );
}

export default App;


function Header(props) {
  return (
    <header className="App-header">
      <h1>
        Leapfrog Devops Speakers Club
      </h1>
    </header>
  )
}
