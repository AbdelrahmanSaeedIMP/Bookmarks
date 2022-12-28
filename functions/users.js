const jwt = require('jsonwebtoken');
const {Auth} = require('./auth.js');
const { Users } = require('./usersModel.js')
const joi = require('joi');

const user = new Users();

const userRouter = (app => {
    app.get('/user/bookmarks', Auth, async (req, res) => {
        try {
            console.log('request sent from client');
            const userData = jwt.decode(req.headers.authorization.split(' ')[1]);
            const joiSchema = joi.object({
                id: joi.number().required(),
                name: joi.string().required(),
            })
            await joiSchema.validateAsync(userData);
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