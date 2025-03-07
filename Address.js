


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

function deleteContact(name){
    let index=addressBook.findIndex(contact => contact.first===name||contact.last_names===name);
    if (index === -1) {
        console.log("Contact Not Found!");
        return;
    }
    addressBook.splice(index, 1);
console.log("Element deleted.")
}

let adding1 = new AddressClass("Deepak", "Singh", "House no 45", "Bhopal", "Madhya Pradesh", "462046", "9691876648", "singh017deepak@gmail.com");
let adding2 = new AddressClass("Rahul", "Sharma", "Sector 22", "Noida", "Uttar Pradesh", "201301", "9876543210", "rahul@example.com");

addressBook.push(adding1);
addressBook.push(adding2);

console.log("Address Book Before Update:");
console.log(addressBook);

editContact("Deepak", { city: "Indore", phone_number: "9988776655" });

deleteContact("Deepak");

console.log(addressBook);
