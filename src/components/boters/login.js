/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Globals, { _t } from "../../Ressources/Globals";
import React from "react";
import FakeApi from "../../API/fakeApi";
import "./login.css";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { GoAlert } from "react-icons/go";
import { IoSendSharp, IoEyeOff, IoEye } from "react-icons/io5";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoginComponent = (props) => {
  const { steps, triggerNextStep } = props;
  let user_mail = steps.user_mail.value,
    password = steps.password.value;

  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPass, setshowPass] = useState(false);
  const [user, setuser] = useState({ email: "mail" });

  React.useEffect(() => {
    load_init();
    return () => {};
  }, []);

  function triggetNext() {
    triggerNextStep();
  }

  function load_init() {
    setLoading(true);
    seterror("");
    if (user_mail == "" || password == "") {
      seterror(_t("field_missed"));
      setuser({ error: true });

      setLoading(false);
      return;
    } else if (user_mail.length < 5 || password.length < 5) {
      seterror(_t("field_invalid"));
      setuser({ error: true });
      setLoading(false);
      return;
    }

    FakeApi.AuthSignin({ user_mail, password })
      .then((res) => {
        setuser(res);
        setLoading(false);
        if (res.error) {
          seterror(_t("wrong_pass_or_mail"));
        } else {
          triggetNext();
        }
      })
      .catch((err) => {
        console.log("err1 => ", err);
      });
  }

  return (
    <div className="sweet-loading">
      {loading ? (
        <BeatLoader
          color={Globals.COLORS.secondary}
          loading={loading}
          cssOverride={override}
          size={10}
        />
      ) : user.error ? (
        <div className="logined-component">
          <Alert className="p-1 text-mulish" variant="warning">
            <GoAlert className="mx-2" />
            {error}
          </Alert>
          <div className="mx-2">
            <input
              defaultValue={user_mail}
              type="email"
              className="re-input form-control shadow-none border-0 border-bottom rounded-0"
              onChange={(e) => {
                user_mail = e.currentTarget.value;
              }}
              placeholder={_t("enter_email")}
            />
            <Row className="align-items-center position-relative">
              <Col className="col-10">
                <input
                  defaultValue={password}
                  className="re-input pass-input form-control shadow-none mt-2  border-0 border-bottom rounded-0 "
                  type={showPass ? "password" : "text"}
                  onChange={(e) => {
                    password = e.currentTarget.value;
                  }}
                  placeholder={_t("enter_pass")}
                />
                <button
                  onClick={(e) => {
                    setshowPass(!showPass);
                  }}
                  className="btn-showpass border-0 position-absolute"
                >
                  {showPass ? <IoEye /> : <IoEyeOff />}
                </button>
              </Col>
              <Col className="col-2 position-relative">
                <button
                  onClick={(e) => {
                    load_init();
                  }}
                  className="btn-dark bg-light border-0"
                >
                  <IoSendSharp />
                </button>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div className="logined-component">
          {_t("loginned_as")}{" "}
          <strong
            style={{ wordBreak: "break-all" }}
          >{`${user.user_mail}`}</strong>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
