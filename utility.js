export const UTIL = {
    getCountryDataFromUser(countryValue,selectOne){

        return new Promise(function(resolve,reject){
            selectOne.addEventListener("change",function(){
                resolve(countryValue());
                reject("error");
            });
        });

    },
    getRegionDataFromUser(stateValue,selectTwo, country){

        return new Promise(function(resolve ,reject){
            selectTwo.addEventListener("change",function(){
                resolve(stateValue(country));// HERE PARAMETER IS COUNTRY NAME
                reject("error");
            });
        });

    },
    getCityDataFromUser(cityValue,selectThree){

        return new Promise(function(resolve,reject){
            selectThree.addEventListener("change",function(){
                resolve(cityValue());// HERE PARAMETER IS COUNTRY NAME AND REGION NAME
                reject("error");
            });
        });
   
    },
    
    onSearchButtonClick(searchButton){

        return new Promise(function(resolve){
            searchButton.addEventListener('click',function(){
                resolve("ok");
            });
        });
    },

    getDataFromWeatherAPI(url,options){
        return fetch(url,options);
    },
    dataInJSON(response){
        return response.json();
    },
    updatingPage2(page2,res){
        return new Promise(function(resolve){
            resolve(page2(res));
        });
    },
};
