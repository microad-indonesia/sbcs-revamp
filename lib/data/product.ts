import product from "./product.json";

export type Products = Product[];

export type Product = {
  readonly ProductsData: ProductDetail[];
};

export type ProductDetail = {
  readonly id: number;
  readonly slug: string;
  readonly name?: string;
  readonly description?: string;
  readonly created_at: Date;
  readonly image: string;
  readonly image_variant_1?: string;
  readonly image_variant_2?: string;
  readonly image_variant_3?: string;
  readonly image_variant_4?: string;
  readonly is_active: string;
  readonly short_description?: string;
  readonly updated_at?: Date;
  readonly link?: string;
  readonly link_1?: string;
  readonly link_2?: string;
  readonly price?: string;
};

export default product as unknown as Product;
