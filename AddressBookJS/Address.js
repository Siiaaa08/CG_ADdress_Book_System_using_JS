
class AddressClass {
    constructor(first, last_names, address, city, state, zip, phone_number, email) {
        this.first = first;
        this.last_names = last_names;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone_number = phone_number;
        this.email = email;
    }
}
let add=new AddressClass("deepak","Singh","House no 45","Bhopal","Madhya Pradesh","462046","9691876648","singh017deepak@gmail.com");
console.log(add);
