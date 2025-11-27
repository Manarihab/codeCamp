export interface SingleProd{
  id: number
  name: string
  description: string
  category: string
  category_id: number
  images: Img[]
  tags: any[]
  variants: Variant[]
}

export interface Img {
  url: string
}

export interface Variant {
  id: number
  color: string
  hex_code: string
  size: string
  size_order: number
  price: string
  stock_quantity: number
  is_default: number
}
