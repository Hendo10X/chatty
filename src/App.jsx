import axios from "axios"
import Register from "./Register"
function App() {
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.withCredentials = true
  return (
    <div className="">
      <Register/>
    </div>
  )
}

export default App
