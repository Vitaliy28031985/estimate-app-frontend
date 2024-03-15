import { useDispatch } from 'react-redux';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileProjects from "./ProfileProjects/ProfileProjects";
import {authApi} from "../../redux/auth/authApi";
import s from "./Profile.module.scss";
function ProfilePage() {
    const dispatch = useDispatch();
    dispatch(authApi.util.resetApiState()); 

    return (
        <div>
        <h1 className={s.profileTitle}>Кабінет користувача</h1>
        <div className={s.profileContainer}>
            <ProfileInfo/>
           
            <ProfileProjects />
         </div>
        </div>
    )

}

export default ProfilePage;