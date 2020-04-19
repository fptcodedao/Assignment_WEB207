export interface IProduct {
    id: string;
    name: string;
    image_url?: string;
    description?: string;
    category_id: string;
    created_at: Date;
}
