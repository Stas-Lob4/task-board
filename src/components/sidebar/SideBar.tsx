import s from './SideBar.module.scss'
import MenuOpenImage from '../assets/images/sidebar/menu_open.svg'
import AvatarUserImage from '../assets/images/sidebar/avatar.png'
import ExpendLessImage from '../assets/images/sidebar/expand_less.svg'
import TuneImage from '../assets/images/sidebar/tune.svg'
import { ProjectMenuBar } from './project-menubar/ProjectMenuBar.tsx'

export const SideBar = () => {
	return (
		<div className={s.container}>
			<div className={s.head}>
				<div className={s.head_title}>Dashboard</div>
				<div className={s.head_button}>
					<img src={MenuOpenImage} alt="menu_open" />
				</div>
			</div>
			<div className={s.content}>
				<div className={s.content_user}>
					<div className={s.user_avatar}>
						<img src={AvatarUserImage} alt="avatar" />
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
							<img src={ExpendLessImage} alt="expand" />
						</div>
					</div>
					<div className={s.menu_items}>
						<div className={s.menu_item}>
							<div className={s.item_image}>
								<img src={TuneImage} alt="item" />
							</div>
							<div className={s.item_name}>Settings</div>
						</div>
					</div>
				</div>
				<ProjectMenuBar/>
			</div>
		</div>
	);
};