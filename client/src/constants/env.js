export const ENV = {
  CLIENT_DEV_DOMAIN: "http://localhost:3000",
  SERVER_DEV_DOMAIN: "http://localhost:4000/api",
  CLIENT_PROD_DOMAIN: "https://busan-tf.n-e.kr",
  SERVER_PROD_DOMAIN: "/api",
  GAME_SERVER_DOMAIN: "/game-api",
};

export const API = {
  USER_REGISTER: "/user/register",
  RECONFIRM_QR: "/user/reconfirm-qr",
  USER_INFO: "/user/info",
  GET_USER_TEAM: "/user/team",
  JOIN_USER: "/user/join",
  CREATE_TEAM: "/team/create",
  VIEW_WAITING_TEAM: "/team/waiting",
  VIEW_TEAM_SCORE: "/team/score",
  PLUS_TEAM_SCORE: "/team/plus",
  INIT_TEAM_MAP_INDEX: "/init",
  VIEW_MAP_INDEX: "/where",
  ROLL_DICE: "/next",
};
