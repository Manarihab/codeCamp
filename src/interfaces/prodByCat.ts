export interface ProdsBy {
  category: string
  products: ProdBy[]
}

export interface ProdBy {
  id: number
  name: string
  description: string
  category: string
  images: Image[]
  tags: any[]
  size: any[]
  color: any[]
}

export interface Image {
  url: string
}
