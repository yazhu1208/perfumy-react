import one from "../assets/images/one.jpg"
import three from "../assets/images/three.jpg"
import two from "../assets/images/two.jpg"
function Product()
 {
 
  return (
    <div class="Images">
      <div class="Box">
        <img src={one} alt="one"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus eos rem iste omnis earum nobis tempore dolorem deleniti recusandae!</p>
      </div>
      <div class="Box">
        <img src={two} alt="two"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus eos rem iste omnis earum nobis tempore dolorem deleniti recusandae!</p>
      </div>
      <div class="Box">
        <img src={three} alt="three"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus eos rem iste omnis earum nobis tempore dolorem deleniti recusandae!</p>
      </div>
    </div>
  )
 }       
 export default Product