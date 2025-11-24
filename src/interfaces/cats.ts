export interface Cats {
  status: string
  code: number
  data: Cat[]
  message: string
}

export interface Cat {
  id: number
  name: string
  description?: string
  parent_id?: number
}
