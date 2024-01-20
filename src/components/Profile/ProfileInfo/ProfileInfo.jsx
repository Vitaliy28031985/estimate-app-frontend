// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {setCredentials} from "../../../redux/auth/authSlice";
import {useCurrentQuery} from "../../../redux/auth/authApi";
import s from "./ProfileInfo.module.scss";

function ProfileInfo() {
    const {data} = useCurrentQuery();
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     if (data) {
    //       dispatch(setCredentials(data));
    //     }
    //   }, [data, dispatch]);

return(
    <div>
        <h3 className={s.infoTitle}>Моя інформація:</h3>
        <div className={s.ifoContainer}>
            <div className={s.profileContainerPhoto}>
                <img src="https://www.shutterstock.com/image-illustration/avatar-modern-young-guy-working-260nw-2015853839.jpg" alt="" />
            </div>
            <div>
                <p className={s.infoText}>Ім'я: <span className={s.infoTextMins}>{data?.user?.name}</span></p>
                <p className={s.infoText}>Email: <span className={s.infoTextMins}>{data?.user?.email}</span></p>
                <p className={s.infoText}>Номер телефону: <span className={s.infoTextMins}>{data?.user?.phone}</span></p>
            </div>
            {/* <button><logout width={"18"} height={"18"}/></button> */}
     
        </div>
    </div>
)
}

export default ProfileInfo;