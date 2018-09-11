import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import APIRouter from './route/APIRouter';
import SignRouter from './route/SignRouter';

import csshook from 'css-modules-require-hook/preset';

import assethook from 'asset-require-hook';
assethook({
	extensions: ['png', 'jpg']
})


import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
import reducers from '../src/reducers';





const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

const dbUrl = 'mongodb://localhost/dk';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('数据库连接成功！')});


// //路由拦截，如果是http请求,直接移交给下一个中间件，否则执行静态页面
app.use(function (req, res, next) {

    console.log(req.url)
	if (req.url.startsWith('/api') || req.url.startsWith('/sign/') ) {
		return next();
	}

	const store = createStore(reducers, compose(
		applyMiddleware(thunk)
	));
	let context = {};
	const markup = renderToString(  (<Provider store={store}>
										<StaticRouter location={req.url } context={context}>
											<App></App>
										</StaticRouter>
									</Provider>)  )

	return res.send(markup)
})


app.use('/',express.static(path.resolve('build')))

app.use('/api', APIRouter);
app.use('/sign', SignRouter);
// /////////////////////

app.listen(8080,function(){
	console.log("后端挂载8080端口");
});

