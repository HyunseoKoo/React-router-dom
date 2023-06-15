import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const onClickBtn = () => {
        navigate('/fruit')
    }
    return (
        <>
             <div>
                리액트 라우팅 돔 연습 🚀
            </div>
            <button onClick={onClickBtn}>과일 페이지 이동</button>
        </>
    )
}

export default MainPage;