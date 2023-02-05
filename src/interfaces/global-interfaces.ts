export interface TodoInterface {
  todo: string,
  status: boolean,
  _id: string
}

export interface PostDataInterface {
  data: {
    todo: string,
    status: boolean
  }
}
