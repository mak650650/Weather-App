import { countryRegions } from "./loactionData.js";

export const selectOne = document.getElementsByTagName("select")[0];
export const selectTwo = document.getElementsByTagName("select")[1];
export const locationValue = ()=>{
    try {
        
        let  key = [];
        let value = selectOne.options[selectOne.selectedIndex].innerHTML;
        key.push(value);
        console.log(key);//
        if(key.length !== 0){
            let regionArray = countryRegions[key[0]];
            console.log(regionArray[0]);
            for(let i = 0; i<regionArray[0].length;i++ ){
                selectTwo.appendChild( document.createElement("option")); 
                selectTwo.options[i+1].innerHTML = regionArray[0][i]; 
            }
            let updatedRegion = selectTwo.options;
            console.log(updatedRegion); //
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
    finally{
        console.log("TASK COMPLETED")
        ;
    }

}
