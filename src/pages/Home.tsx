import { SideBar } from '../components/sidebar/SideBar.tsx'
import { ContentBoard } from '../components/content-board/ContentBoard.tsx'

import s from './home.module.scss'

export const Home = () => {
  return (
    <div className={s.container}>
      <SideBar/>
      <ContentBoard/>
    </div>
  );
};
