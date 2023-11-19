import Funcomp from './funcomp.js'
import Clscomp from './classcomp.js'
import Nojsx from './withoutjsx.js'
import Properties from './propsreact'
import Idaccess from './Hooks/useRef'


function App(){
  
  return(
    <div>

    <Funcomp/>
    <Clscomp/>
    <Nojsx/>
    <Properties name={"\"this is my name\""}/>
    
    <Idaccess/>
    </div>
    )
}

export default App