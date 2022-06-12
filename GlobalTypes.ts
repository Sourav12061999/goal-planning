export type userDataType={
  name:string,
  email:string,
  password?:string,
}
export type userDataStateType ={
    loading:boolean,
    user:userDataType | null,
    error:string | undefined,
    signedin:boolean,
}