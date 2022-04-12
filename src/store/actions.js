 export const Incremnt =(num)=>{
    return{
      type: 'INC',
      payload: num ?num : 1
    }
  }
  
  export const Decrement =(num)=>{
    return{
      type: 'DEC',
      payload: num ?num : 1
      
    }
  }
  export const login = ()=>{
    return{
      type: 'login'
    }
  };
  export const logout = ()=>{
   return{type: 'logout'
  }
  }