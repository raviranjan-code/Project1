import { Button } from "../../Components/Card/Button";
import { Input } from "../../Components/Card/Input";
import '../../Assets/Styles/FormStyle.css'



export const LogIn = () => {
  
  return (
    <>
    
      <div class="form-container">
        <p>LogIn details</p>
        <form>
          <div class="input-container">
            <i class="fas fa-envelope"></i>
            <Input
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"enter your email"}
            />
          </div>

          <div class="input-container">
            <i class="fas fa-lock"></i>
            <Input
              type={"password"}
              id={"password"}
              name={"pasword"}
              placeholder={"*******"}
            />
          </div>
          <Button type={"submit"} label={"LogIN"} />
        </form>
      </div>
    </>
  );
};
