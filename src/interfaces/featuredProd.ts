export interface Featured {
  status: string
  code: number
  data: FeaturedProd[]
  message: string
}

export interface FeaturedProd {
  id: number
  category_id: number
  supplier_id: any
  name: string
  description: string
  is_featured: number
  status: string
  created_at: string
  updated_at: string
  deleted_at: any
  media: Medum[]
  tags: any[]
}

export interface Medum {
  id: number
  model_type: string
  model_id: number
  uuid: string
  collection_name: string
  name: string
  file_name: string
  mime_type: string
  disk: string
  conversions_disk: string
  size: number
  manipulations: any[]
  custom_properties: any[]
  generated_conversions: GeneratedConversions
  responsive_images: any[]
  order_column: number
  created_at: string
  updated_at: string
  original_url: string
  preview_url: string
}

export interface GeneratedConversions {
  webg: boolean
  thumb: boolean
}
