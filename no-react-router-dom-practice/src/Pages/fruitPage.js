import {styled} from 'styled-components';

function FruitPage() {

    return (
        <>
          <a href='#/fruit'>show me the 과일</a>
          <S.Flex>
            <button>사과</button>
            <button>바나나</button>
            <button>오렌지</button>
          </S.Flex>
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