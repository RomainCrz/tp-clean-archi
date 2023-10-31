import { Invoice } from "./invoice.entity";

export interface CustomerInterface {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
    email: string;
    phone : string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    invoices: Invoice[];

}

export class Customer {
    private id: string;
    private name: string;
    private email: string;
    private phone : string;
    private address: string;
    private city: string;
    private state: string;
    private country: string;
    private zip: string;
    private invoices: Invoice[];

    constructor(customerInterface: CustomerInterface){
        this.id = customerInterface.id || '';
        this.name = customerInterface.name;
        this.email = customerInterface.email;
        this.phone = customerInterface.phone;
        this.address = customerInterface.address;
        this.city = customerInterface.city;
        this.state = customerInterface.state;
        this.country = customerInterface.country;
        this.zip = customerInterface.zip;
        this.invoices = customerInterface.invoices || [];
    }
}