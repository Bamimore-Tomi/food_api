const param =  { 
'order':'A',
'measure': 'liter',
'quantity': 3,
'phone_number':08058468425,
'time': Date.now()
}


const apiDeletefood= 'http://localhost:8080/api/add_order'
const id = '08029177733'
async function updateAFood(params){
	const fetch = require("node-fetch")
    try{
        let response = await fetch(apiDeletefood, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'

            },
			body: JSON.stringify(params)
        });
		responseJSON = await response.json()
		console.log(responseJSON)
        return;
		

    } catch(error){
        console.error(error);
    }
}
updateAFood(param);
	
