import React from "react";
import google from "../../../images/social/google-logo.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p>
        Error:{error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary shadow-lg mb-2 w-50 d-block mx-auto"
        >
          <img src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-secondary shadow-lg mb-2 w-50 d-block mx-auto">
          <img src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-secondary shadow-lg mb-2 w-50 d-block mx-auto"
        >
          <img src={github} alt="" />
          <span className="px-2">GitHub Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
