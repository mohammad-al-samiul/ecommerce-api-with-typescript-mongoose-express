export type ECommerceProductVariant = {
  type: string; // Variant type (e.g., size, color)
  value: string; // Specific variant value (e.g., "Small", "Red")
};

export type ECommerceProductInventory = {
  quantity: number; // Available quantity in stock
  inStock: boolean; // Indicates whether the product is currently in stock
};

export type ECommerceProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: ECommerceProductVariant[];
  inventory: ECommerceProductInventory;
};
