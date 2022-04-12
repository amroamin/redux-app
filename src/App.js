import {useSelector, useDispatch} from 'react-redux';
import { Incremnt,Decrement,login,logout } from './store/actions';


function App() {
  const count = useSelector(state=> state.counter.count)
  const isLogged= useSelector(state=> state.log.logged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        {isLogged ?(
        <button onClick={ ()=>dispatch(logout())}>logout </button> 
         ) : (<button onClick={ ()=>dispatch(login())}>login</button>)}
       
      </header>
      <div className="counter">
      <button onClick={()=>dispatch(Incremnt())}>+</button> 
      <button onClick={()=>dispatch(Incremnt(3))}>+3</button>
      <button onClick={()=>dispatch(Decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
