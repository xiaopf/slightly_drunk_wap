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
import { renderToString, renderToNodeStream} from 'react-dom/server';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
import reducers from '../src/reducers';
import staticPath from '../build/asset-manifest.json';



const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
const server = require('http').Server(app)

const dbUrl = 'mongodb://localhost/dk';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('数据库连接成功！')});

app.use('/api', APIRouter);
app.use('/sign', SignRouter);
// /////////////////////
// //路由拦截，如果是http请求,直接移交给下一个中间件，否则执行静态页面
app.use(function (req, res, next) {
	

	if (req.url.startsWith('/api') || req.url.startsWith('/sign/') || req.url.startsWith('/static/') || req.url.startsWith('/upload/') || req.url.startsWith('/icon/')) {
		return next();
	}

	if (req.url.startsWith('/') && req.url.endsWith('/')){
		return res.redirect('/index')
	}

	if (req.cookies.userId && (req.url.startsWith('/signin') || req.url.startsWith('/signup'))) {
		return res.redirect('/index')
	}

	if (!req.cookies.userId && !req.url.startsWith('/sign')) {
		return res.redirect('/signin')
	}


	const store = createStore(reducers, compose(
		applyMiddleware(thunk)
	));

	let context = {};

	res.write(`<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
					<meta name="theme-color" content="#000000">
					<link rel="shortcut icon" href="/favicon.png">
					<title>slightly drunk</title>
					<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
					<link href="/${staticPath['main.css']}" rel="stylesheet">
					
					
				</head>
				<body>
					<noscript>
						You need to enable JavaScript to run this app.
					</noscript>
					<div id="root">`)

	// const markup = renderToString(  (<Provider store={store}>
	// 									<StaticRouter location={req.url } context={context}>
	// 										<App></App>
	// 									</StaticRouter>
	// 								</Provider>)  )

	const markupStream = renderToNodeStream((<Provider store={store}>
		<StaticRouter location={req.url} context={context}>
			<App></App>
		</StaticRouter>
	</Provider>))

	markupStream.pipe(res, { end: false })
	markupStream.on('end',()=>{
		res.write(`            </div>
							<script src="/${staticPath['main.js']}"></script>
						</body>
					</html>`)		

	    res.end()
	})


	// const pageHtml = `
	// 					<!DOCTYPE html>
	// 						<html lang="en">
	// 						<head>
	// 							<meta charset="utf-8">
	// 							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	// 							<meta name="theme-color" content="#000000">
	// 							<link rel="shortcut icon" href="/favicon.png">
	// 							<title>slightly drunk</title>
	// 							<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	// 							<link href="/${staticPath['main.css']}" rel="stylesheet">
								
								
	// 						</head>
	// 						<body>
	// 							<noscript>
	// 								You need to enable JavaScript to run this app.
	// 							</noscript>
	// 							<div id="root">${markup}</div>

	// 							<script src="/${staticPath['main.js']}"></script>
	// 						</body>
	// 					</html>
	// 				`
	// return res.send(pageHtml)

})
// app.use(express.static('build'))
app.use('/', express.static(path.resolve('build')))
// app.use('/', express.static(path.resolve('build')))


server.listen(8080,function(){
	console.log("后端挂载8080端口");
});

