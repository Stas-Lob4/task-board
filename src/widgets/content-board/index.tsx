import { AddButton, Avatar, BoardView, ListView, SearchIcon } from '@/shared/assets/images/content'
import { Board } from '@/shared/ui'

import s from './content-board.module.scss'

export const ContentBoard = () => {
  return (
    <div className={s.container}>
      <div className={s.board_head}>
        <div className={s.board_head_title}>Tasks Boards</div>
        <div className={s.board_head_users}>
          <div className={s.user_circles}>
            <div className={s.user_circle}>
              <img alt={'avatar'} src={AddButton} />
            </div>
            <div className={s.user_circle}>
              <img alt={'avatar'} src={Avatar} />
            </div>
            <div className={s.user_circle}>
              <img alt={'avatar'} src={Avatar} />
            </div>
            <div className={s.user_circle}>
              <img alt={'avatar'} src={Avatar} />
            </div>
            <div className={s.user_circle}>
              <div className={s.count_users}>+5</div>
            </div>
          </div>
          <div className={s.add_user_button}>
            <img alt={'add_image'} src={AddButton} />
          </div>
        </div>
      </div>
      <div className={s.board_action}>
        <div className={s.view_type}>
          <div className={s.view_board}>
            <div className={s.view_img}>
              <img alt={'view_board'} src={BoardView} />
            </div>
            <div className={s.view_name}>Board View</div>
          </div>
          <div className={s.list_board}>
            <div className={s.view_img}>
              <img alt={'view_board'} src={ListView} />
            </div>
            <div className={s.view_name}>List View</div>
          </div>
        </div>
        <div className={s.search}>
          <div className={s.search_icon}>
            <img alt={'search'} src={SearchIcon} />
          </div>
          <input placeholder={'Search Tasks'} type={'text'} />
        </div>
      </div>
      <Board />
    </div>
  )
}
