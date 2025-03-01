import { useState } from 'react'
import data from './data'
import List from './components/List';

function App() {
 const [usuarios, setUsuarios] = useState(data);

  return (
    <main>
      <section className='container'>
          <h3>{usuarios.length}: BirthDays</h3>
          <List usuarios={usuarios} />
          <button type='button' className='btn btn-block'>Limpar Lista</button>
      </section>
    </main>
  )
}

export default App
