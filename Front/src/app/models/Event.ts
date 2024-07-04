
export interface Event {
    id?: number;
    title: string;
    lieux: string;
    tlf: number;
    content: string;
    postedby: string;
    filePath: any; 
    file?: File; 
}