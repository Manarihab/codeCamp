export interface LatestProducts {
  status: string
  code: number
  data: Product[]
  message: string
}

export interface Product {
  id: number
  name: string
  description: string
  category: string
  images: Image[]
  tags: any[]
}

export interface Image {
  url: string
}
