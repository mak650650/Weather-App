import { UTIL } from "./utility.js";
import { countryValue , stateValue , cityValue , selectOne , selectTwo , selectThree , searchButton } from "./loaction.js";

const log = console.log;
const warn = console.warn;
const APP ={
    init(){
        
        UTIL.getCountryDataFromUser(countryValue,selectOne).then((country)=>{
            warn("COUNTRY IS ENTERED :- "+ country);
            UTIL.getRegionDataFromUser(stateValue ,selectTwo ,country).then((region)=>{
                warn("REGION ENTERED:- "+ region);
                UTIL.getCityDataFromUser(cityValue, selectThree).then((city)=>{
                    warn("CITY ENTERED:- "+ city);
                    UTIL.onSearchButtonClick(searchButton).then((e)=>{
                        console.log(e)
                        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/'+country+'/'+region+'/'+city;
                        const options = {
                            method: 'GET',
                            headers: {
                                'X-RapidAPI-Key': '711137c5fcmsh41ebb48c2c7af98p1a2dc8jsn8f1e4f3253ec',
                                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                            }
                        };
                        UTIL.getDataFromWeatherAPI(url,options).then((response)=>{
                            warn("HURRY! We Got a Response :-");
                            UTIL.dataInJSON(response).then((res)=>{
                                log(res);
                            })// JSONS .THEN ENDS HERE
                        },(response)=>{
                            console.error(response);
                        })// API CALL .THEN ENDS HERE
                    })
                   
                },(error_city)=>{
                    console.error(error_city);
                })// REGION .THEN ENDS HERE
               
            },(error_region)=>{
                console.error(error_region);
            })// REGION .THEN ENDS HERE

        },(error_country)=>{
            console.log(error_country);
        })// COUNTRY .THEN ENDS HERE
    }
}

document.addEventListener("DOMContentLoaded",APP.init);
