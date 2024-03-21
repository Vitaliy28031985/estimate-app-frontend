import NotFound from "../../components/Icons/notFound/NotFound";
import s from "./NotFoundPage.module.scss";
function NotFoundPage() {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1>Такої сторінки не існує</h1>
                <p>Перйдіть на іншу сторінку!!!</p>
            </div>
            <NotFound/>
        </div>
    )}

    export default NotFoundPage;