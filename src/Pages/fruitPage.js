import { Outlet, useNavigate } from "react-router-dom";
import {styled} from "styled-components";

function FruitPage() {
    const navigate = useNavigate();

    const onClickBtn = (e) => {
        navigate(`/fruit/${e.target.innerText}`)
    };

    return (
        <>
          <div>show me the 과일</div>
          <S.Flex>
            <button onClick={onClickBtn}>사과</button>
            <button onClick={onClickBtn}>바나나</button>
            <button onClick={onClickBtn}>오렌지</button>
          </S.Flex>
          <Outlet />
        </>
    )
}

export default FruitPage;

const Flex = styled.div`
  display: flex;
`;

const S = {
  Flex
};