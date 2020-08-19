import * as express from 'express';
// import * as request from 'request';
import * as cors from 'cors';
import * as path from 'path';
import { APP_PORT } from './config';

const app = express();
const staticDir = path.resolve(__dirname, '../static');
const publicDir = path.resolve(__dirname, '../public');

// Add cors headers
app.use(cors());
app.options('*', cors());

// Serve static files
app.use('/static', express.static(staticDir));
// Serve public directory
app.use(express.static(publicDir));
// Service worker
app.use('/sw.js', (_, res) => res.sendFile(path.resolve(staticDir, 'sw.js')));
// SPA
app.use('/*', (_, res) => res.sendFile(path.resolve(staticDir, 'index.html')));

app.listen(process.env.PORT || APP_PORT);
