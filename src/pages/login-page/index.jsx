import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
import { useContext } from "react";
import { AuthTokenContext } from "../../context/auth-token-context-provider/index";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const api = useApi();
  const authTokenContextValue = useContext(AuthTokenContext);
  const navigate = useNavigate();


  const onFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJson = Object.fromEntries(data.entries());
    console.log(formJson);
    api
      .post("auth/login", formJson)
      .then((response) => {
        toast.success("You are logged in", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        authTokenContextValue.setAuthToken(response.data.data.token);
        dispatch(setUserData(response.data.data.userData));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Row className="justify-content-center">
        <Col xs="12" sm="8" lg="4">
          <div className="form-group my-3">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="email" name="email" />
          </div>
          <div className="form-group my-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" />
          </div>
          <div className="form-group">
            <Button type="submit">
              <i className="fa-regular fa-paper-plane"></i> Send
            </Button>
          </div>
        </Col>
      </Row>
    </form>
  );
}
