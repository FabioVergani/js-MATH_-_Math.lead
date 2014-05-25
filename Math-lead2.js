Math.lead=function(a,b){return isNaN(a)||!isFinite(a)?0:a===b?a:Math.max(a,b||0)};

console.log(Math.lead("qqq",1));
console.log(Math.lead(1,1));
console.log(Math.lead(5,7));
console.log(Math.lead(1));
console.log(Math.lead(1,2));
console.log(Math.lead(3,4));
console.log(Math.lead(-1));
console.log(Math.lead(-1,null));
console.log(Math.lead(-1,-2));
console.log(Math.lead(1,-2));
console.log(Math.lead(-3,-2));
