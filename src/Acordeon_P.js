import { useState} from 'react';

function Acordeon({children}) {
    const [show, setShow] = useState(false);
    
    return (
      <div className="desplegable">
         <button onClick={() => setShow(!show)}>{show ? '' : 'crear pregunta'}</button>
          {show &&
           <div>
            {children}
            </div>
          }
        
      </div>
    );
  }
  
  export default Acordeon;