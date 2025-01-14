
import attendance from "../../Assets/Images/attendance-1.png"
import socialconversation from "../../Assets/Images/socialconversation.jfif";
import safetyfire from "../../Assets/Images/safety.jpg";
import '../../Assets/Styles/Home.css'
export const Home=()=>{
    return(
        <>
      <div class="analytics">
        <h3>In Depth Attendance Analytics</h3>
        <div class="analytics-p">
          <p>
            The time is now for the next step. We bring you the future of
            attendance recording.
          </p>
        </div>
      </div>
      <div class="analytics-cards">
        <div class="card">
          <div class="card-img">
            <img src={socialconversation} alt="" />
          </div>
          <h4 class="social">SOCIAL CONVERSATIONS</h4>
          <p>We don't hold back. Contact us on our social media links.</p>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={attendance} alt="" />
          </div>
          <h4 class="attendance">ANALYZE ATTENDANCE</h4>
          <p>
            Get all the statistics and in-depth analysis of attendance for
            teachers as well as students.
          </p>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={safetyfire} alt="" />
          </div>
          <h4 class="safety">SAFETY FIRST</h4>
          <p>
            Your authentication is secure and encrypted to avoid unauthorized
            personnel from logging in.
          </p>
        </div>
      </div>
      </>
    )
}