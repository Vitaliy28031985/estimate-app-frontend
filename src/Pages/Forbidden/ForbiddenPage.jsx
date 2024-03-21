
import s from "./ForbiddenPage.module.scss";
function ForbiddenPage() {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1>Цей кошторис Вам не доступний</h1>
                <p>будь ласка, зверніться за доступом до власника кошторису!!!</p>
            </div>
            <div className={s.picture}></div>
        </div>
    )}

    export default ForbiddenPage;