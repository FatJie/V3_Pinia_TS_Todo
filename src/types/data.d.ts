export interface ITodoItem {
  id: number
  name: string
  done: boolean
}

export type IActive = 'All' | 'Completed' | 'Active'
