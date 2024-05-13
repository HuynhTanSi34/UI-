import { useState, useEffect } from "react";
import "./Form.scss";
import Login from "../Login/Login";
import Register from "../Register/Register";
function Form() {
  const [getRegister, setGetRegister] = useState(false);
  const [getClassName, setGetClassName] = useState(" ");
  const [activeForm, setActiveForm] = useState(false);
  useEffect(() => {
    document.title = "Đăng nhập";
  });

  function showRegister() {
    let checkRe = document.getElementById("registering");
    if (getRegister == false) {
      setActiveForm(true);
      setGetRegister(true);
      setGetClassName("open");
      checkRe.innerHTML = "Cancel";
      document.getElementById("formregis").classList.add("zoomout");
      document.getElementById("formregis").classList.remove("zoomin");
    } else {
      setActiveForm(false);
      setGetRegister(false);
      setGetClassName(" ");
      checkRe.innerHTML = "Register";
      document.getElementById("formregis").classList.add("zoomin");
      document.getElementById("formregis").classList.remove("zoomout");
    }
  }

  return (
    <section className="form-container">
      <div className="form-box" id="formregis">
        <div className="form-header">
          <div className="form-he-up">NAME WEB</div>
        </div>
        <div
          className={activeForm == false ? "form-content" : "register"}
          id="formLogin"
        >
          {activeForm == false ? <Login /> : <Register />}
          {/* <Login /> */}
        </div>
        <div className="form-footer">
          <button
            className={`${getClassName}`}
            onClick={showRegister}
            id="registering"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
export default Form;
