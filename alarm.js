var k=1;
var hours=document.getElementById('hours')
var whole=document.getElementById('whole')
var minutes=document.getElementById('minutes')
var time=document.getElementById('time')
var but=document.getElementById('but')
var currentime=document.querySelector('h2')
var settime, setalarm= false,
ringtone=new Audio('ring.mp3');

// var date=new Date()
// var times =date.getHours() + ":" + date.getMinutes();

for(i=12;i>0;i--)
{ 
    i=i<10 ? "0" + i:i;
    hours.innerHTML+=`<option>${i}</option>`
    // console.log(i);
}
for(i=60;i>0;i--)
{ 
    i=i<10 ? "0" + i:i;
    minutes.innerHTML+=`<option>${i}</option>`
    // console.log(i);
}
for(i=2;i>0;i--)
{ 
    ampm=i==1 ? "AM":"PM";
    time.innerHTML+=`<option>${ampm}</option>`
    // console.log(i);
}
setInterval(()=>
{
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";
    if(h>=12)
    {
     h=h-12;
     ampm="PM";
    }
   // if hour value 0 set value 12
     h=h==0? h=12:h;
    // add 0 before hr,min,sec value less than 10
    h= h<10? "0"+h:h;
    m= m<10? "0"+m:m;
    s= s<10? "0"+s:s;
    currentime.innerText=(`${h}:${m}:${s} ${ampm}`);

    if(settime == `${h}:${m} ${ampm}`)
    {
        // console.log('hi');
        ringtone.play();
        ringtone.loop=true;
    }

},1000);

but.addEventListener("click",()=>
{ 

    if(setalarm)
    {             
        // setalarm is true
        settime=""  ; // clear the value
        ringtone.pause();  // pause the ringtone
        whole.classList.remove('disable')
        but.innerText="Set Alarm";
        return setalarm =false; // return setalarm is false

    }
    localStorage.setItem(k,hours.value+":"+minutes.value+""+time.value)
    k++;
    let t=`${hours.value}:${minutes.value} ${time.value}`;
    console.log(t);
    settime=t;
    // console.log(settime);
    if(t.includes("hours")|| t.includes("minutes")||t.includes("time") )
    {
        return alert('enter valid time')
    }    

    setalarm=true;
    whole.classList.add('disable')
    but.innerText="Clear Alarm";
})




