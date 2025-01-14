import attendancepic from "../../Assets/Images/remote-job@4x (1).webp";
import "../../Assets/Styles/Home.css"
export const FeatureSection=()=>{
    return(
        <>
         <div class="features-container">
                <div class="feature-text">
                  <div class="feature">
                    <h2>For Students</h2>
                    <p>
                      Taking attendance made easier. Register and upload your photo to
                      have a hassle-free experience in recording your attendance.
                    </p>
                  </div>
                  <div class="feature1">
                    <h2>For Teachers</h2>
                    <p>
                      Detailed analytics for you. Make classrooms, add students and take
                      their attendance for detailed reports.
                    </p>
                  </div>
                </div>
                <div class="feature-img">
                  <img src={attendancepic} />
                </div>
              </div>
        </>
    )
}