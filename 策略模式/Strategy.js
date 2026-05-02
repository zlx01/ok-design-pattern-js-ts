class LoginController {
  constructor() {
    this.strategy = undefined;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
    this.login = strategy.login;
  }
}

/**
 * 用户名、密码策略
 */
class LocalStrategy {
  login({ username, password }) {
    console.log(`用户名：${username}，密码：${password}`);
  }
}

/**
 * 手机号码、验证码策略
 */
class PhoneStrategy {
  login({ phone, code }) {
    console.log(`手机号码：${phone}，验证码：${code}`);
  }
}

/**
 * 第三方社交登录策略
 */
class SocialStrategy {
  login({ provider }) {
    console.log(`第三方社交登录：${provider}`);
  }
}

const loginController = new LoginController();

const api = "/login/phone";

switch (api) {
  case "/login/local":
    loginController.setStrategy(new LocalStrategy());
    loginController.login({ username: "admin", password: "123456" });
    break;
  case "/login/phone":
    loginController.setStrategy(new PhoneStrategy());
    loginController.login({ phone: "13800138000", code: "123456" });
    break;
  case "/login/social":
    loginController.setStrategy(new SocialStrategy());
    loginController.login({ provider: "wechat" });
  default:
    break;
}
