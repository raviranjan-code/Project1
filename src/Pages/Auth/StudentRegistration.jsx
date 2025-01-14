import { Button } from "../../Components/Card/Button";
import { Input } from "../../Components/Card/Input";
import '../../Assets/Styles/FormStyle.css'

export const StudentRegistration=()=>{
    return(
        <>
       
        <div class="form-container">
        <p>Fill in your details</p>
        <form>
          <div class="input-container">
            <i class="fas fa-user"></i>
            <Input type={"text"} id={"name"} placeholder={"enter your name"} />
          </div>

          <div class="input-container">
            <i class="fas fa-building"></i>
            <select id="division" name="division">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
            </select>
          </div>

          <div class="input-container">
            <i class="fas fa-id-card"></i>
            <Input
              type={"text"}
              id={"roll-no"}
              name={"roll-no"}
              placeholder={"enter your roll no"}
            />
          </div>

          <div class="input-container">
            <i class="fas fa-graduation-cap"></i>
            <select id="year" name="year">
              <option value="TY">TY</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

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
              name={"password"}
              placeholder={"********"}
            />
          </div>

          <Input type={"checkbox"} />
          <span class="formcheckbox">
            Click if you are registering as a student <br />
          </span>

          <Button type={"submit"} label={"Create Account"}></Button>
        </form>
      </div>
    </>
  );
};

    