 for (let i = 0; i < 7; i++) {
   console.log(i);
 }

 //for in loop

 const user = {
   name: "pavansai",
   roll: 33,
 };

 for (let i in user) {
   console.log(i);
   console.log(user[i]);
 }

 const nums = [1, 2, 3];

 for (let i in nums) {
   console.log(nums[i]);
 }

 //for of loop

 const nums4 = [1, 2, 3];

 for (let i of nums4) {
   console.log(i);
 }

 const paragraph = "its a javascript";

 for (let i of paragraph) {
   console.log(i);
 }

 let i = 20;
 while (i > 0) {
   console.log(i);
   i--;
 }