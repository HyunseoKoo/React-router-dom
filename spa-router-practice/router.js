export default function createRouter() {
    const routes = [];  // 경로 목록을 수집하는 저장소 역할의 배열. url을 구성 요소에 매핑(저장/수집..?!)한 객체들을 저장하는 배열.

    // 라우터를 구현한 메서드 객체
    const router = {

        // 메서드1 역할 ? 애플리케이션의 경로 목록들을 저장. routes에 url & 구성 요소들을 매핑해 저장하기 위함.
        addRoute(fragment, component) {
            routes.push({fragment, component});
            console.log(routes);
            return this; // 여기서의 this는 global object로 브라우저에서 호출하는 경우 window를 가리킴.
        },

        // 메서드2 역할 ? 현재 url이 변경되면 페이지 콘텐츠를 해당 url에 매핑된 구성 요소로 교체. url 변경을 청취하기 위함.
        start() {
            const checkRoutes = () => {
                const currentRoute = routes.find(route => route.fragment === window.location.hash);
                currentRoute.component();
            }

            window.addEventListener('hashchange', checkRoutes);
            checkRoutes();
        }
    };

    return router;
}