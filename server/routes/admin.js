import  express from 'express';
import { createUser} from "../contollers/admin.js"
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("admin");
});
router.post('/createUser', createUser);

export default router;
