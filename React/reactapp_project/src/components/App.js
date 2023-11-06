import Btncls from './ourbtn'
import expobj from './lisGroup'
import './App.css'
// import Jkclass from './classextends'

function jk(){
//below is array  
  // var contacts=[
  //   {
  //     id:'2',
  //     name:'komera'
  //   }
    
  //   ]
  var obj1={"name":"komera","age":21}
  var company="gowtham"  
  return (
  <div className="ui container">
    <h1>{JSON.stringify(obj1)}helo0 {company}and{expobj.expvar}</h1>
    
    
    
    <Btncls myvar={company}/>
    <expobj.lisgr />
    
    </div>
    )
}

export default jk