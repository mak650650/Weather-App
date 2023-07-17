import { countryRegions } from "./loactionData.js";

export const selectOne = document.getElementsByTagName("select")[0];
export const selectTwo = document.getElementsByTagName("select")[1];
export const selectThree = document.getElementsByTagName("select")[2];
export const searchButton = document.getElementsByClassName('search')[0];
export const countryValue = ()=>{
    try {
        
        let  key = [];
        let value = selectOne.options[selectOne.selectedIndex].innerHTML;
        key.push(value);
        if(key.length > 0){
            let regionArray = countryRegions[key[0]];
            for(let i = 0; i<regionArray[0].length;i++ ){
                selectTwo.appendChild( document.createElement("option")); 
                selectTwo.options[i+1].innerHTML = regionArray[0][i]; 
            }
           
        }
        else{
            console.warn("'key' ARRAY IS EMPTY");
        }
        let country = key;
        return country
    } 
    catch (error) {
        console.error(error);
    }
}

export const stateValue = function(country){
    try {
        //country is array
        let  state = [];
        let stateName = selectTwo.options[selectTwo.selectedIndex].innerHTML;
        state.push(stateName);
        let cities = countryRegions[country[0]][1][state[0]];
        if(cities.length > 0){

            for(let i = 0; i<cities.length;i++ ){
                selectThree.appendChild( document.createElement("option")); 
                selectThree.options[i+1].innerHTML = cities[i]; 
            }
           

        }else{ console.warn("'key' ARRAY IS EMPTY");}
    
        return state;

    } catch (error) {
        console.error(error);
    }
};
export const cityValue = function(){ 
    try {
        //country is array and region is array
        let  city = [];
        let cityName = selectThree.options[selectThree.selectedIndex].innerHTML;
        city.push(cityName);
        return city;
        
    } catch (error) {
        console.error(error);
    }
    finally{
        console.log("TASK-3 COMPLETED");
    }

};

