import { useEffect, useState } from 'react';
import {styled} from 'styled-components';

function FoodPage() {
    const [pageName, setPageName] = useState();

    useEffect(() => {
        window.onpopstate = (e) => {
            console.log(e);
            setPageName(e.state);
        }
    },[pageName]);
  
    const onChangePage1 = () => {
        const pageName = '콜라';
        window.history.pushState(pageName, "", "/콜라"); // pushState(페이지 이동할때 전달할 데이터, 변경 브라우저 제목, 변경 주소)
        setPageName(pageName);
    }
  
    const onChangePage2 = () => {
        const pageName = '햄버거';
        window.history.pushState(pageName, "", "/햄버거"); 
        setPageName(pageName);
    }
  
    const onChangePage3 = () => {
      const pageName = '감자튀김';
      window.history.pushState(pageName, "", "/감자튀김"); 
      setPageName(pageName);
  }
      return (
        <>
          <div>show me the 과일</div>
          <S.Flex>
            <button onClick={onChangePage1}>콜라</button>
            <button onClick={onChangePage2}>햄버거</button>
            <button onClick={onChangePage3}>감자튀김</button>
          </S.Flex>
            {pageName === '콜라' && '🥤'}
            {pageName === '햄버거' && '🍔'}
            {pageName === '감자튀김' && '🍟'}
        </>
      )
}

export default FoodPage;

const Flex = styled.div`
  display: flex;
`;

const S = {
  Flex
};