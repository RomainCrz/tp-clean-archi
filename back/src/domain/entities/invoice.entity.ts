import { z } from "zod";
import { invoiceSchema } from "../../schema/invoiceSchema";
import { Customer } from "./customer.entity";

export interface InvoiceInterface {
    id?: string;
    createdAt: Date;
    updatedAt: Date;
    invoiceNumber: string;
    invoiceDate: Date;
    dueDate: Date;
    status: string;
    totalAmount: number;
    totalTax: number;
    totalDiscount: number;
    totalAmountWithTax: number;
    totalAmountWithTaxAndDiscount: number;
    customer: Customer;
    products: Product[]
}

export class Invoice {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    invoiceNumber: string;
    invoiceDate: Date;
    dueDate: Date;
    status: string;
    totalAmount: number;
    totalTax: number;
    totalDiscount: number;
    totalAmountWithTax: number;
    totalAmountWithTaxAndDiscount: number;
    customer: Customer;
    products: Product[]

    constructor(invoiceInterface: InvoiceInterface){
        this.id = invoiceInterface.id || '';
        this.createdAt = invoiceInterface.createdAt;
        this.updatedAt = invoiceInterface.updatedAt;
        this.invoiceNumber = invoiceInterface.invoiceNumber;
        this.invoiceDate = invoiceInterface.invoiceDate;
        this.dueDate = invoiceInterface.dueDate;
        this.status = invoiceInterface.status;
        this.totalAmount = invoiceInterface.totalAmount;
        this.totalTax = invoiceInterface.totalTax;
        this.totalDiscount = invoiceInterface.totalDiscount;
        this.totalAmountWithTax = invoiceInterface.totalAmountWithTax;
        this.totalAmountWithTaxAndDiscount = invoiceInterface.totalAmountWithTaxAndDiscount;
        this.customer = invoiceInterface.customer;
        this.products = invoiceInterface.products || [];
    }

}