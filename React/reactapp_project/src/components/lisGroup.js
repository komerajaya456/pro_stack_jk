const expvar="exporting varianle"
function lisgr(props){
  let tot_lik=87;
  return ( 
    //if we use different tags we should use fragments( like <div> container)    
  
    <fragment>
    
    <h4>thisis JSX{expvar}(javascript XML) file</h4>
    
    
  <button className="btn btn-primary"><p>{tot_lik}</p>Like</button>
    
    </fragment>
  
  
  
  
    )
};
const expobj={lisgr,expvar}
export default expobj;