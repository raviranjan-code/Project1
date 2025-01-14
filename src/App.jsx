import { PublicRoute } from "./Routes/PublicRoute"
import {HashRouter} from "react-router-dom"

function App(){
  return(
    <div>
      <HashRouter>
      <PublicRoute/>
      </HashRouter>
    
    </div>
  )
}

export default App