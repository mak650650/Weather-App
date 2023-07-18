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
    
};

export const dashboard1 = document.getElementById('dashboardcontainer');
export const dashboard2 = document.getElementById('dashboardcontainer-page-2');
const gp1_block1 = dashboard2.children[0].children[0].children[0];
const gp1_block2 = dashboard2.children[0].children[0].children[1];

const gp2_block = dashboard2.children[0].children[1].children[0];

const gp3_block = dashboard2.children[1].children[0].children[0];

const gp4_block1 = dashboard2.children[1].children[1].children[0];
const gp4_block2 = dashboard2.children[1].children[1].children[1];
const gp4_block3 = dashboard2.children[1].children[1].children[2];

const background  = document.body;

export const page2 = function(res) {
    try {
        
        dashboard1.style.visibility = 'hidden';
        dashboard2.style.visibility = 'visible';
        gp1_block2.style.color = "white";
       

        gp1_block1.children[0].innerText = ` ${res.location.name} ,${res.location.region} ,${res.location.country}`;

        gp1_block2.children[0].innerText = `${res.current.temp_c} °C`; 
        gp1_block2.children[1].innerText = ` Feels like :- ${res.current.feelslike_c} °C`
        gp1_block2.children[2].innerText = ` Humidity :- ${res.current.humidity}`
        gp1_block2.children[3].innerText = ` Precipitaion :- ${res.current.precip_mm} mm`
        gp1_block2.children[4].innerText = ` Wind Speed :- ${res.current.wind_kph} kph`


        gp2_block.children[0].innerText = ` Lat x Log:- ${res.location.lat} x ${res.location.lon}`;
        gp2_block.children[1].innerText = ` Local Time:- ${res.location.localtime}`;
        gp2_block.children[2].innerText = ` Timezone:- ${res.location.tz_id}`;


        gp3_block.children[0].innerText = `STATUS:-
        \n  ${res.current.condition.text}`;
        gp3_block.children[1].innerText = ` Last Updated:- ${res.current.last_updated} `

    } catch (error) {
        console.error(error);
    }
};
