const express = require('express');
//import express from 'express' //=> es6 syntax 현재 nodejs에서 es6문법은 사용불가
const path = require('path');
const hbs = require('hbs');
const app = express ();

const publicDir = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/view');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir));
 
app.get('',(req,res)=>{
    res.render('index',{
        제목:'미세먼지 정보 ',
        이름:'유지수',
        이메일 : 'air@hotmail.com'
    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        제목:'미세먼지 정보 ',
        이름:'help담당자',
        이메일 : 'air@hotmail.com',
        메세지 : '미세정보에 관한앱(help)'
    })
}) 

app.get('/about',(req,res)=>{
    res.render('about',{
        제목:'미세먼지 정보 ',
        이름:'유지수',
        이메일 : 'air@hotmail.com'
    })
}) 
// app.get('/',(req,res)=>{
//     res.send('안녕하세요');
// })

// app.get('/help',(req,res)=>{
//     res.send("어떤 도움이 필요하십니까?");
// })
// app.get('/about',(req,res)=>{
//     res.send("express server를 작동하는 application입니다.");
// })

app.get('/air',(req,res)=>{
    res.send({
        forecast:"지금쌀쌀해요",
        위치 : "서울"
    })
}
)
app.listen(5000,()=>{ // port number
        console.log('Server is up and running at port 5000');
}) 