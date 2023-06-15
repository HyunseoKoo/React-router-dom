import { useEffect, useState } from "react";
import MainPage from "./Pages/mainPage";
import FruitPage from "./Pages/fruitPage";
import FoodPage from "./Pages/foodPage";

function App() {
  const [pageName, setPageName] = useState();

  useEffect(() => {
      window.onpopstate = (e) => {
          console.log(e);
          setPageName(e.state);
      }
  },[pageName]);

  const onChangePage1 = () => {
      const pageName = 'fruit';
      window.history.pushState(pageName, "", "/fruit"); // pushState(페이지 이동할때 전달할 데이터, 변경 브라우저 제목, 변경 주소)
      setPageName(pageName);
  }

  const onChangePage2 = () => {
      const pageName = 'food';
      window.history.pushState(pageName, "", "/food"); 
      setPageName(pageName);
  }

  return(
      <>
          {!pageName && <MainPage />}
          <button onClick={onChangePage1}>fruit</button>
          <button onClick={onChangePage2}>food</button>
          {pageName === 'fruit' && <FruitPage />}
          {pageName === 'food' && <FoodPage />}
      </>
  )
}

export default App;
