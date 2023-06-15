import createRouter from "../../../spa-router-practice/router";

const container = document.querySelector("main")
const pages = {
    home: () => container.innerText = "과일 페이지가 나와야할텐데..",
    fruit: () => container.innerText = "🍎🍌🍊"
}

const router = createRouter();

router.addRoute("#/", pages.home)
      .addRoute("#/fruit", pages.fruit)
      .start();