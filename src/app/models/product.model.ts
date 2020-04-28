import { ICategories } from './categories.model';
export interface IProduct {
    id: string;
    name: string;
    image_url?: string;
    price: string;
    categories?: ICategories;
    description?: string;
    category_id: string;
    created_at: Date;
}
