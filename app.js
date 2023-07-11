import { UTIL } from "./utility.js";
import { locationValue } from "./loaction.js";
import { selectOne,selectTwo} from "./loaction.js";

const log = console.log;
const warn = console.warn;
const APP ={
    init(){
        UTIL.getDataFromUser(locationValue,selectOne).then((result)=>{
            warn("COUNTRY IS ENTERED :- "+result);
            const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/'+result;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '711137c5fcmsh41ebb48c2c7af98p1a2dc8jsn8f1e4f3253ec',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            UTIL.getDataFromWeatherAPI(url,options).then((response)=>{
                warn("HURRY! We Got a Response :-")
                UTIL.dataInJSON(response).then((res)=>{
                    log(res);
                })
            })

        })
    }
}
document.addEventListener("DOMContentLoaded",APP.init);
