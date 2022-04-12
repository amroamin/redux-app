
const intialState ={
logged : false
}

export const log = (state=intialState, action)=>{
    switch(action.type){
      case 'login': return {...state,
       logged: true};
      case 'logout': return {...state, 
      logged:false};
      default: return state
    }
  }
  