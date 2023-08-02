const userString = 
{
    "firstName":"Pavan",
    "lastName":"Sai",
    "followers":[
        {
            "firstName":"",
            "lastName":""
        },
        {
            "firstName":"",
            "lastName":""
        }
    ],
    "id":238,
    "isEmailVerified":false,
    "posts":null
}
;

//const userObj = JSON.parse(userString);

 //console.log(userObj.id);
 console.log(typeof userString);

const post = {
  title: "post 1",
};

const postStr = JSON.stringify(post);

console.log(typeof post);
console.log(typeof postStr);