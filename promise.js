let mypromise=new promise ((res,rej)=>{
    setTimeout(()=>{
      if(5>8){
        res("promise success")
    }
    else{
        rej("promise failure")
    }  
 }, 10000);

}) 

console.log(mypromise);

function process(){
    console.log('task started');
    mypromise.then((res)=>{console.log(res)})
.catch((rej)=>{console.log(rej)
})

console.log('task ended');

}