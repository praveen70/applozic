

export function getUselist(){
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(
        (result) => result.data )
      

    
    
}

