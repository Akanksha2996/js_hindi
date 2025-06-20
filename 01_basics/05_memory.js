// memory allocations
// stack memory(primitive), and heap (Non-PRIMITIVE)
//  stack memory(primitive)  - JO VAR DECLARE KIUYA H USKA DUPLICATE MILTA H
//  heap (Non-PRIMITIVE) - Jo var declare kiya uski original value  milti h

// stack memory(primitive)

let akankshaMail = "abc@123gmail.com"
let othermail = akankshaMail
othermail = "akashay@123gmail.com"
console.log(othermail);
console.log(akankshaMail);


// Heap  memory(non-primitive)

let myUser1 = {
  email: "hrabc@gmail.com",
  upi: "user@124e3"
}
let myUser2 = myUser1
myUser2.email = "aaku@gmail.com"
console.log(myUser2);
console.log(myUser1);
