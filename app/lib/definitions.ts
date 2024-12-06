import internal from "stream";

export type User = {
    id: string;
    salesid: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
}

export type Client = {
    business_id: string;
    clientid: number;
    business_name: string;
    client_name: string;
    email: string;
    phone_number: string;
    notes: string;
}

export type Vendor = {
    company_id: string;
    vendorid: number;
    company_name: string;
    email: string;
    address: string;
    phone_number: string;
    ask: number;
    price_plan: string;
}

export type Project = {
    salesid: number;
    name: string;
    po: string;
    status: string;
    due_date: string;
    project_name: string;
    clientid: number;
    vendorid: number;
}
