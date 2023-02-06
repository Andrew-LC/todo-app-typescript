export interface TodoInterface {
  todo: string,
  status: boolean,
  _id: string,
  callback?: any
}

export interface PostDataInterface {
  data: {
    todo: string,
    status: boolean
  }
}
