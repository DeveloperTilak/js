//  process.stdout.write(4 +"print only string"); //it used to print only string.


// OBJECTS

//Additional operation
//1.  add
//2. remove
//3. access

let user ={
    name : "Awdhesh",
    age : 23,

}

console.log(user.name);//access
user.Lname = "Kumar"; // add
console.log(user.Lname);

delete user.Lname;
 

console.log(user);//accessing complete objects

 // for loop 

 for(let key in user){
    console.log(key); // prints only keys.
    console.log(user[key])// prints only values.

    console.log(key + " " + user[key])
 }
