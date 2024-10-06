import { AvatarSidebar, ExpandLess, MenuOpen, Tune } from '@/shared/assets/images'

import s from './side-bar.module.scss'

import { ProjectMenuBar } from './project-menubar'

export const SideBar = () => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.head_title}>Dashboard</div>
        <div className={s.head_button}>
          <img alt={'menu_open'} src={MenuOpen} />
        </div>
      </div>
      <div className={s.content}>
        <div className={s.content_user}>
          <div className={s.user_avatar}>
            <img alt={'avatar'} src={AvatarSidebar} />
          </div>
          <div className={s.user_data}>
            <div className={s.user_name}>Test Testing</div>
            <div className={s.user_role}>Developer</div>
          </div>
        </div>
        <div className={s.menu}>
          <div className={s.menu_head}>
            <div className={s.menu_head_title}>Dashboards</div>
            <div className={s.button_expand}>
              <img alt={'expand'} src={ExpandLess} />
            </div>
          </div>
          <div className={s.menu_items}>
            <div className={s.menu_item}>
              <div className={s.item_image}>
                <img alt={'item'} src={Tune} />
              </div>
              <div className={s.item_name}>Settings</div>
            </div>
          </div>
        </div>
        <ProjectMenuBar />
      </div>
    </div>
  )
}
