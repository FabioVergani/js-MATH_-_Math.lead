Math.lead=function(a,b){return a===Number(a)?a===b?a:Math.max(a,b||0):0};

//():

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

/*
0
1
7
1
2
4
0
0
-1
1
-2
*/
