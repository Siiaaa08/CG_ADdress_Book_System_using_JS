


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

let adding=new AddressClass("Deepak","Singh","House no 45","Bhopal","Madhya Pradesh","462046","9691876648","singh017deepak@gmail.com");
addressBook.push(adding);
console.log(adding);

console.log(addressBook)
