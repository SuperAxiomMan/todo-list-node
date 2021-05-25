import { Application } from "./Application";
import { frontRouter } from "./Router";

const init = () => {
    const app = new Application(frontRouter)
    console.log('app initialized!');
};

window.addEventListener('load', init);
