interface Friend{
    firstName: String;
}
function printFirstName(friends: Friend[]){
    for(let friend of friends){
        console.log(friend.firstName);
    }
}

let isVisible:boolean = true;

printFirstName([{firstName: "Thomas"},
{firstName: "Anna"},{firstName: "Julia"}])
