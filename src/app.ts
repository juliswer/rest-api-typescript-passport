import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import authRoutes from './routes/auth.routes'
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import specialRoutes from './routes/special.routes';
const app = express()

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
})

app.use(authRoutes);
app.use(specialRoutes)

export default app; 