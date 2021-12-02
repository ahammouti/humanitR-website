import { render } from 'react-dom';
import App from './Components/App';
import './Styles/index.css';

render(<App />, document.getElementById('root'))

const elvenShieldsRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    caca: 4,
};

console.log(elvenShieldsRecipe);