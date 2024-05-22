let cityname=document.getElementById('cityname');
let temp=document.getElementById('temp');
let icon=document.getElementById('icon');
let date=document.getElementById('date');
let feelslike=document.getElementById('fl');
let hum=document.getElementById('hum');
let win=document.getElementById('win');
let pres=document.getElementById('pres');
let clouds=document.getElementById('clouds');
let i=document.getElementById('inputf');
let but=document.getElementsByClassName('but');
let city='pune';
let f=document.getElementById('f');
const handlesubmit=(e)=>{
    e.preventDefault();
    city=i.value;
    getData();


}
f.addEventListener('submit',handlesubmit);




const getCountry=(c)=>{
    return new Intl.DisplayNames([c],{type:"region"});
}
const getData=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=23ec57d1adab774093f0a2b88ae2cca9`;
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
        console.log('hi');
        const{main,name,weather,wind,sys,dt}=data;
        cityname.innerText=`${name},${sys.country}`;
        temp.innerHTML=`${main.temp} K`;
        feelslike.innerHTML=`${main.feels_like} K`;
        hum.innerHTML=`${main.humidity}`;
        win.innerHTML=`${wind.speed}`;
        pres.innerHTML=`${main.pressure}`;
        but[0].innerText=`${weather[0].main}`;
        let d=new Date();
        let sd=d.toLocaleDateString();
        date.innerText=sd;
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;


        


        
        
    }
    catch(error){
        console.log(error);
    }


}
document.body.addEventListener('load',getData());