
// multiplication table
        let selectedNumber = document.querySelector('#req-number');
        selectedNumber.addEventListener('keyup',function(){
            let theNumber = Number(selectedNumber.value);
            document.querySelector('#number').innerText = theNumber;
            calculate();
        });

        let range=document.querySelector('#multiplier');
        let rangeEl=document.querySelector('#multiplier');
        rangeEl.addEventListener('input',function()
            {
                let selectedmultiplier=Number(rangeEl.value);
                document.querySelector('#multi').innerText=selectedmultiplier;
                calculate();
        });
        //calculate
        let calculate = () => {
            let thenumber=Number(document.querySelector('#number').innerText);
            let multiplier=Number(document.querySelector('#multi').innerText);
            let result=thenumber*multiplier;
            document.querySelector('#result').innerText=result;
        };


// Digital Watches
let indianWatch = () => {
    let options = { timeZone : 'Asia/Kolkata' } ;
    let date = new Date().toLocaleDateString('en-US',options);
    let currenttime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#indian-date').innerText = date;
    document.querySelector('#indian-time').innerText = currenttime;
};
setInterval(indianWatch,1000);

let USAWatch = () => {
    let options = { timeZone : 'America/New_York' } ;
    let date = new Date().toLocaleDateString('en-US',options);
    let currenttime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#USA-date').innerText = date;
    document.querySelector('#USA-time').innerText = currenttime;
    
};
setInterval(USAWatch,1000);

let chinaWatch = () => {
    let options = { timeZone : 'Asia/Shanghai' };
    let date = new Date().toLocaleDateString('en-US',options);
    let currenttime = new Date().toLocaleTimeString('en-US',options);
   
    document.querySelector('#china-date').innerText=date;
    document.querySelector('#china-time').innerText=currenttime;
};
setInterval(chinaWatch,1000);

