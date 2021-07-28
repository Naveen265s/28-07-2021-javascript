let users = [
    {id:1, name:'naveen', sal:10000},
    {id:2, name:'naveen', sal:20000},
    {id:3, name:'kumar', sal:15000},
    {id:4, name:'naveen', sal:30000}, 
]

//find method it return to find the first one

// let user = users.find(i=>i.id>2)

// if(user!=null){
//     console.log(user.name);

// }else {
//     console.log('invalid user');
// }

let arr = users.filter(i=>i.sal>15000)

console.log(arr);