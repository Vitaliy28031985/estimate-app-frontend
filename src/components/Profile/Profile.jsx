import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileProjects from "./ProfileProjects/ProfileProjects";
import s from "./Profile.module.scss";
function ProfilePage() { 

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