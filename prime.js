function checkprime(num){
let counter=0;
for(let i=1;i<=num;i++){
  if (num%2==0){
   counter++;
}
}
if(counter==2){
 return true
}else{
return false;
}

}

let ans= checkprime(18);
if(ans==true){
console.log("is prime");
}else{
console.log("not prime");
}

