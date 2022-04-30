import React, {useEffect} from 'react';


export function SampleComponent() {

    useEffect(()=>{

             fetch( '/api/', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            }).then(async res=>{
                console.log(res)
                 const response =await  res.json();
                console.log(response);
            }).catch(err=>console.log('there was an error:: ', err))




    },[])

    return (
        <div>
            This is a sample component
        </div>
    );
}