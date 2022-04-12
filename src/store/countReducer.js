
const intialState ={
    count: 0
}

export const counter = (state=intialState, action)=>{
    switch(action.type){
      case 'INC': return {...state,
       count: state.count+ action.payload};
      case 'DEC': return {...state, 
       count: state.count - action.payload};
      default: return state
    }
  }
  