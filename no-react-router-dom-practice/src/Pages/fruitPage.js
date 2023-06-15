import { useEffect, useState } from 'react';
import {styled} from 'styled-components';

function FruitPage() {
  const [pageName, setPageName] = useState();

  useEffect(() => {
      window.onpopstate = (e) => {
          console.log(e);
          setPageName(e.state);
      }
  },[pageName]);

  const onChangePage1 = () => {
      const pageName = '사과';
      window.history.pushState(pageName, "", "/사과"); // pushState(페이지 이동할때 전달할 데이터, 변경 브라우저 제목, 변경 주소)
      setPageName(pageName);
  }

  const onChangePage2 = () => {
      const pageName = '바나나';
      window.history.pushState(pageName, "", "/바나나"); 
      setPageName(pageName);
  }

  const onChangePage3 = () => {
    const pageName = '오렌지';
    window.history.pushState(pageName, "", "/오렌지"); 
    setPageName(pageName);
}
    return (
      <>
        <div>show me the 과일</div>
        <S.Flex>
          <button onClick={onChangePage1}>사과</button>
          <button onClick={onChangePage2}>바나나</button>
          <button onClick={onChangePage3}>오렌지</button>
        </S.Flex>
          {pageName === '사과' && '🍎'}
          {pageName === '바나나' && '🍌'}
          {pageName === '오렌지' && '🍊'}
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