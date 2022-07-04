const roles = [
  {
    name: 'admin',
    access: ['overview', 'tickets', 'users'],
  },
  {
    name: 'operator',
    access: ['overview', 'tickets'],
  }
];

let users = {
  "message": "app running well",
  "data": {
    "access_token": "X_Q_X_Q_X_Q_X_Q_X_Q_X_Q_X",
    "refresh_token": "X_Q_X_Q_X_Q_X_Q_X_Q_X_Q_X",
    "scope": "openid",
    "token_type": "Bearer",
    "expires_in": 3600
  }
}

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

export default {
  users,
  messages,
  roles,
};
