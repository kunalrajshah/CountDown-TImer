const enddate="19 Dec 2022 10:00 PM";
document.getElementById("end-date").innerText=enddate;
const input=document.getElementsByTagName("input");

const clock=()=>{
  const end=new Date(enddate);
  const now=new Date();
  const diff=(end-now)/1000;
  //console.log(diff);

  if(diff<0)
  {
    return;
  }
  // Convert into Days
  input[0].value=(Math.floor(diff/3600/24));
  // Remaining Hour
  input[1].value=(Math.floor(diff/3600)%24);
  // Remaining Minute
  input[2].value=(Math.floor(diff/60)%60);
  // Remaining second
  input[3].value=(Math.floor(diff%60));

}

//Initial call
clock();

//Call at each interval of second
setInterval(clock,1000);



/*
 1 day=24hr
 1hr=60 mint
 60 mint= 3600 sec
*/
