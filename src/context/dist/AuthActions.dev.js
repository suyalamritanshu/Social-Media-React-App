"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unfollow = exports.Follow = exports.LoginFailure = exports.LoginSuccess = exports.LoginStart = void 0;

var LoginStart = function LoginStart(userCredentials) {
  return {
    type: "LOGIN_START"
  };
};

exports.LoginStart = LoginStart;

var LoginSuccess = function LoginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  };
};

exports.LoginSuccess = LoginSuccess;

var LoginFailure = function LoginFailure() {
  return {
    type: "LOGIN_FAILURE"
  };
};

exports.LoginFailure = LoginFailure;

var Follow = function Follow(userId) {
  return {
    type: "FOLLOW",
    payload: userId
  };
};

exports.Follow = Follow;

var Unfollow = function Unfollow(userId) {
  return {
    type: "UNFOLLOW",
    payload: userId
  };
};

exports.Unfollow = Unfollow;
//# sourceMappingURL=AuthActions.dev.js.map
