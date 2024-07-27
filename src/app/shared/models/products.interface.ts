


export interface Iproduct{
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    progress: "InProgress" | "Dispatched" | "Delivery";
    description:string;
}