import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEye } from "react-icons/fa";
import "./Register.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [getEye1, setGetEye1] = useState(false);
  const [getEye2, setGetEye2] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [mainData, setMainData] = useState({
    username: "",
    password: "",
  });

  function showEye1() {
    let inp = document.getElementById("getEye1");
    let label = document.getElementById("setGetEye1");
    if (getEye1 == false && inp.type === "password") {
      setGetEye1(true);
      inp.type = "text";
      label.style.color = "black";
    } else {
      setGetEye1(false);
      inp.type = "password";
      label.style.color = "#999";
    }
  }

  function showEye2() {
    let inp = document.getElementById("box2");
    let label = document.getElementById("eye-confirm");
    if (getEye2 == false && inp.type === "password") {
      setGetEye2(true);
      inp.type = "text";
      label.style.color = "black";
    } else {
      setGetEye2(false);
      inp.type = "password";
      label.style.color = "#999";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.username == "" ||
      data.password == "" ||
      data.confirmPassword == ""
    ) {
      toast.error("Please check information", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (data.password != data.confirmPassword) {
      toast.error("Please check password and confirm password", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      mainData.username = data.username;
      mainData.password = data.password;
      axios
        .post("register", mainData)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Register success!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Username already exist ", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Username already exist", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  return (
    <>
      <Form className="form-register-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="getEye1"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <FaRegEye
            className="eye-register"
            id="setGetEye1"
            onClick={showEye1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            id="box2"
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
          <FaRegEye
            className="eye-register-confirm"
            id="eye-confirm"
            onClick={showEye2}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
}
export default Register;
