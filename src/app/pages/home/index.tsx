import { ContentBoard, SideBar } from '@/widgets'

import s from './home.module.scss'

export const Home = () => {
  return (
    <div className={s.container}>
      <SideBar />
      <ContentBoard />
    </div>
  )
}
