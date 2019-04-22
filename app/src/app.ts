import * as express from 'express';
import * as mongoose from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class User extends Typegoose {
  @prop() name?: string;
}
const UserModel = new User().getModelForClass(User);

const app: express.Express = express();
app.get('/users', async (req, res) => {
    res.json(await UserModel.find());
});

const port: string = process.env.PORT || '3000';
mongoose.connect('mongodb://root:password@mongo:27017/test?authSource=admin', { useNewUrlParser: true });
app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});
