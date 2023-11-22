import Funcomp from './funcomp.js'
import Clscomp from './classcomp.js'
import Nojsx from './withoutjsx.js'
import Properties from './propsreact'
import Idaccess from './Hooks/useRef'
import UseState from './Hooks/useState'

function App(){
  
  return(
    <div>

      <Funcomp/><br/><br/><br/>
      <Clscomp/><br/><br/>
      <Nojsx/><br/><br/>
      <Properties name={"\"this is my name\""}/><br/><br/>
      <Idaccess/>
      <UseState/>
    </div>
    )
}

export default App