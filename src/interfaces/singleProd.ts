export interface SingleProd {
  id: number
  name: string
  description: string
  category: string
  images: Img[]
  tags: any[]
  size: any[]
  color: any[]
}

export interface Img {
  url: string
}
