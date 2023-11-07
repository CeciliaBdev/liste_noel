import { useState } from 'react'
import datas from './datas/datas.json'
import image from './assets/bg.jpg'

import './App.css'
import { Card } from './components/Card';

function App() {

  // console.log(datas)

  const [selectedChild, setSelectedChild] = useState(null);

  const handleClick = (child) => {
    setSelectedChild(child);
  };
  
    

  return (
   <div className='page_content' style={{ backgroundImage:`url(${image})`, width: '100vw',backgroundRepeat:"no-repeat",backgroundSize:"cover" , height:"100vh"}}>
  
    <h1>Liste de Noël</h1>

      <ul className='liste_name'>
        {datas.map((child) => (
          <li
            key={child.id}
            onClick={() => handleClick(child)}
            className={selectedChild === child ? 'selected' : ''}
          >
            {child.name} 
          </li>
        ))}
      </ul>

      <div id="content">
        {selectedChild ? (
          <div>
            <h2>Liste des cadeaux pour {selectedChild.name} :</h2>
            <div className="cards-grid">
              {selectedChild.cadeau.map((cadeau) => (
                <Card key={cadeau.id} cadeau={cadeau} />
              ))}
            </div>
          </div>
        ) : (
          'Sélectionnez un membre de la famille pour afficher sa liste de cadeaux.'
        )}
      </div>
   </div>
  )
}

export default App
