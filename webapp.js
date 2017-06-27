var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var lesson=
{
    'lesson-one' : {
    title:'Lesson One|WebApp',
    heading:'Lesson One',
    content:`<iframe src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
                  `
    },
    'lesson-two' : {
    title:'Lesson One|WebApp',
    heading:'Lesson TWo',
    content:`
          <iframe src="https://www.youtube.com/embed/PMivT7MJ41M" frameborder="0" allowfullscreen></iframe>
                  `
    }
    };



function createTemplate(data){
    var title=data.title;
    var content=data.content;
    var heading=data.heading;

    var htmlTemplate=`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <style>
        .btn-group.special {
          display: flex;
        }

        .special .btn {
          flex: 1
        }

        .embeded-video {
          position: relative
        }
        .navbar
        {
          margin-bottom: 0;
        }

        .navbar li a, .navbar .navbar-brand {
        color: black !important;
    }

    .navbar-nav li a:hover, .navbar-nav li.active a {
        color: #f4511e !important;
        background-color: #fff !important;
    }

    .navbar-default .navbar-toggle {
        border-color: transparent;
        color: #fff !important;
    }
        .jumbotron
        {
        /*padding-top: 0px;
        padding-bottom:0px;*/
        margin: 0;
        /*background-image:url('images/car/car.jpg');
        background-size: cover;*/
        background-color: black;
        position: relative;
        height:150px;
         }

        .embeded-video .ratio-img {
          display: block;
          width: 100% !important;
          height: auto !important;
        }

        .embeded-video IFRAME {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      </style>
      <title>${title}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/ui/css/bootstrap.min.css">
      <script src="/ui/js/jquery.min.js"></script>
      <script src="/ui/js/bootstrap.min.css"></script>
    </head>

    <body style="background-color:white">
      <nav class="navbar navbar-default ">
        <div class="jumbotron" style="background-color:#f8f8f8">
          <div class="container">
            <h1>Heading</h1>
            <!-- <p>Paragraph Paragraph Paragraph Paragraph Paragraph</p> -->
          </div>
        </div>
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/lesson-one">Lesson 1</a></li>
            <li><a href="/lesson-two">Lesson 2</a></li>
            <li><a href="#">Lesson 3</a></li>
            <li><a href="#">Lesson 4</a></li>
            <li><a href="#">Lesson 5</a></li>
            <li><a href="#">Lesson 1</a></li>
            <li><a href="#">Lesson 2</a></li>
            <li><a href="#">Lesson 3</a></li>
            <li><a href="#">Lesson 4</a></li>
            <li><a href="#">Lesson 5</a></li>
          </ul>
        </div>
      </div>
    </nav>
      <div class="container-fluid">
        <div class="modal-body row">
          <div class="col-md-8">
            <!-- first col -->
            <div class="embeded-video">
              <img class="ratio-img" src="http://placehold.it/16x9" alt="16:9 Image" />
              ${content}
            </div>
          </div>
          <div class="col-md-4">
            <!-- second col -->
            <h3>${heading}</h3>
            <p>Paragraph</p </div>
          </div>
        </div>
    </body>

    </html>

                `;
            return htmlTemplate;
}

app.get('/',function(req,res){
  // res.sendFile(path.join(__dirname,'ui','main.html'))
  res.send(createTemplate(lesson['lesson-one']));
});

app.get('/ui/js/boostrap.min.js',function(req,res){
  res.sendFile(path.join(__dirname,'ui','js','bootstrap.min.js'))
});
app.get('/:lessonName', function(req,res){
    //articleName=Article-one or artcile-two
    var lessonName = req.params.lessonName;
    res.send(createTemplate(lesson[lessonName]));
});

app.get('/ui/css/bootstrap.min.css',function(req,res){
  res.sendFile(path.join(__dirname,'ui','css','bootstrap.min.css'))
});
app.get('/ui/js/jquery.min.js',function(req,res){
  res.sendFile(path.join(__dirname,'ui','js','jquery.min.js'))
})

var port = 8080;
app.listen(8080, function () {
  console.log(`Port ${port}!`);
});
