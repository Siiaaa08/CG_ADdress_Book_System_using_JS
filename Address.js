


let addressBook=[];

function nameCheck(naam){
    let regex=/^[A-Za-z]{3,}$/;
    if (!regex.test(naam)) throw new Error(`Invalid name.`);
       
    return naam;
}
function emailCheck(naam){
    let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(naam)) throw new Error(`Invalid email.`);
       
    return naam;
}
function numCheck(naam){
    let regex=/^[6-9][0-9]{9}$/;
    if (!regex.test(naam)) throw new Error(`Invalid number.`);
       
    return naam;
}


function addressCheck(naam){
    let regex=/^[A-Za-z\s0-9]{4,}$/;
    if (!regex.test(naam)) throw new Error(`Invalid address.`);
       
    return naam;}
function zipCheck(no){
    let regex=/^[0-9]{6}$/;
    if (!regex.test(no)) throw new Error(`Invalid zip .`);
       
    return no;
}
class AddressClass {
    
    constructor(first, last_names, address, city, state, zip, phone_number, email) {
        
            this.last_names = nameCheck(last_names);
            this.first = nameCheck( first);
       
        
        
        this.address =addressCheck(address);
        this.city =addressCheck(city);
        this.state = addressCheck(state);
        
        this.zip = zipCheck(zip);
        this.phone_number = numCheck(phone_number);
        this.email = emailCheck(email);
    }
}

//edit contatcts
function editContact(name, addressObject){
    let index=addressBook.findIndex(contact => contact.first===name||contact.last_names===name);
    if (index === -1) {
        console.log("Contact Not Found!");
        return;
    }
let contact=addressBook[index];
try{
    if(addressObject.first){
        contact.first=nameCheck(addressObject.first);
    }if(addressObject.last_names){
        contact.last_names=nameCheck(addressObject.last_names);
    }if(addressObject.address){
        contact.address=addressCheck(addressObject.address);
    }if(addressObject.city){
        contact.city=addressCheck(addressObject.city);
    }if(addressObject.state){
        contact.state=addressCheck(addressObject.state);
    }if(addressObject.zip){
        contact.zip=zipCheck(addressObject.zip);
    }if(addressObject.phone_number){
        contact.phone_number=numCheck(addressObject.phone_number);
    }if(addressObject.email){
        contact.email=emailCheck(addressObject.email);
    }
}catch(error){
    console.log("error",error.message);
}
}

//delete contact
function deleteContact(name){
    let index=addressBook.findIndex(contact => contact.first===name||contact.last_names===name);
    if (index === -1) {
        console.log("Contact Not Found!");
        return;
    }
    addressBook.splice(index, 1);
console.log("Element deleted.")
}

//address size
function sizeAddress(){
    console.log("The total number of Address :- "+addressBook.length);
}

//adding 
function adding(element){
    let duplicate=addressBook.filter(c=>c.first===element.first&&c.last_names===element.last_names);

    if(duplicate.length>0){
        console.log("Element already present!!!");
    }else{
        addressBook.push(element);
        console.log("Element added!!!");
    }
}

//search by city
function searchByCity(city){
    let results = addressBook
        .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
        .map(contact => `${contact.first} ${contact.last_names} - ${contact.email}`);
    if(results.length>0){
        console.log("Found!!!");
        console.log(results);
    }
    else{
        console.log("Not Found!!!");
    }
}
function searchByCityOrState(location){
    let loc=addressBook.filter(contact=>(contact.city.toLowerCase()===location.toLowerCase())||(contact.state.toLowerCase()===location.toLowerCase())).map(contact => `${contact.first} ${contact.last_names} - ${contact.email}`);
    if(loc.length>0){
        console.log("Found!!!");
        console.log(loc);
    }
    else{
        console.log("Not Found!!!");
    }
}

function sortByName(){
    addressBook.sort((a,b)=>a.first.localeCompare(b.first));
    console.log("Sorted elements");
    addressBook.forEach(contact => console.log(`${contact.first} ${contact.last_names} :- ${contact.email}`));
}
function countByCityOrState(location){
    let count = addressBook.reduce((acc, contact) => {
        if (contact.city === location || contact.state === location) {
            acc[location] = (acc[location] || 0) + 1;
        }
        return acc;
    }, {});
    console.log("Information"+ JSON.stringify(count, null, 2));
}
let adding1 = new AddressClass("Deepak", "Singh", "House no 45", "Bhopal", "Madhya Pradesh", "462046", "9691876648", "singh017deepak@gmail.com");
let adding2 = new AddressClass("Rahul", "Sharma", "Sector 22", "Noida", "Uttar Pradesh", "201301", "9876543210", "rahul@example.com");


adding(adding1);
adding(adding2);
adding(adding1);

sortByName();
