import { Router } from 'express';
import { isEmpty } from 'lodash';
const router = Router();

const baseResponse = (code, message, data = null) => {
  return {
    status: code,
    message,
    data
  }
};

router.post('/login', (req, res) => {
  const { username, password} = req.body;

  if (isEmpty(username) || isEmpty(password)) {
    return res.status(400).send(baseResponse(400, 'Username atau password tidak boleh kosong', {}));
  }
  const {data} = req.context.models.users;

  const roles = req.context.models.roles;
  const filterRole = roles.filter(item => item.name === username);

  if (isEmpty(filterRole)) {
    return res.status(400).send(baseResponse(400, 'Username not found', {}));
  }

  const response = baseResponse(200, 'Sukses get data role', {
    ...data,
    roles: filterRole,
  })
  return res.send(response);
});

router.get('/me', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
