export interface IDetailTemplate {
  title: string
  isOwn: boolean
  children: { title: string; url: string }[]
}
