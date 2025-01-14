import { PublicRoute } from "./Routes/PublicRoute"
import {BrowserRouter} from "react-router-dom"

function App(){
  return(
    <div>
      <BrowserRouter>
      <PublicRoute/>
      </BrowserRouter>
    
    </div>
  )
}

export default App