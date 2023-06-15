import {createBrowserRouter} from 'react-router-dom';
import FruitPage from '../Pages/fruitPage';
import MainPage from '../Pages/mainPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainPage />
        ),
    },
    {
        path: 'fruit',
        element: <FruitPage />,
        children: [
            {
                path: '사과',
                element : (
                    <div>🍎</div>
                )
            },
            {
                path: '바나나',
                element: (
                    <div>🍌</div>
                )
            },
            {
                path: '오렌지',
                element: (
                    <div>🍊</div>
                )
            },
        ]
    }
]);

export default router;