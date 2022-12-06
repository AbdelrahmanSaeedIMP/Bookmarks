const jwt = require('jsonwebtoken');
const {Auth} = require('./auth.js');
const {Users} = require('./usersModel.js')

const user = new Users();

const userRouter = (app => {
    app.get('/user/bookmarks', Auth, async (req, res) => {
        try {
            const userData = jwt.decode(req.headers.authorization.split(' ')[1]);
            const ret = await user.get_bookmarks(userData.id);
            res.send(ret);
        }
        catch (err) {
            console.log(err);
            res.status(400).send(err.message)
        }
    })
})

exports.userRouter = userRouter;