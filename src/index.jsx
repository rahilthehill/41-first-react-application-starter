import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

root.render(
    // <h1>Hello React</h1> 
    // this is not HTML, his is called jsx, its a tag based language that is similar to html
    // it has features, not indent meaning, the indent doesn't matter for the code, unlike some
    // must contain one element, you can't a massive "div"
    // only one child under the render{} however, the top child can have infinite number of childs in them
    // you can resolve the problem without using ivs, you can add a fragment (a container without a dom element)
    // reversed keywords, class -> className , for -> htmlFor
<>
    <h1>Hello react</h1>
    <p>lorem</p>


</>


)