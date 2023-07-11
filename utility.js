export const UTIL = {
    getDataFromUser(locationValue,selectOne){
        return new Promise(function(resolve){
            selectOne.addEventListener("change",function(){
                resolve(locationValue());
            }) 
        });
    },
    getDataFromWeatherAPI(url,options){
        //return fetch(url,options);
    },
    dataInJSON(response){
        return response.json();
    }
}
