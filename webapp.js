var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var lesson=
{

  'lesson-one' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/zVBY871JNi0" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-two' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/NMDaQcxSSZo" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-three' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/IDP-CTX83qE" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-four' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/Yrp34qm5WL8" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-five' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/T_eIdMnue24" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-six' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/TCJff8GNX3k" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-seven' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/4Vr2ZnBNVJk" frameborder="0" allowfullscreen></iframe>
                `
  },'lesson-eight' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/pZ12CMGtEOM" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-nine' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/e12EEi36cuc" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-ten' : {
  title:'Lesson One|WebApp',
  heading:'Lesson One',
  description:'abcd',
  content:`<iframe src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
                `
  }
  };



function createTemplate(data){
    var title=data.title;
    var content=data.content;
    var heading=data.heading;
    var description=data.description;

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
        .navbar {
              margin-bottom: 0;
              background-color: #f4511e;
              // z-index: 9999;
              // border: 0;
              // font-size: 12px !important;
              // line-height: 1.42857143 !important;
              // letter-spacing: 4px;
              // border-radius: 0;
              // font-family: Montserrat, sans-serif;
          }
          .navbar li a, .navbar .navbar-brand {
              color: #fff !important;
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
        // background-image:url('http://www.indiaholidayarchitects.com/wp-content/uploads/2014/12/Kerala-India-travel-background-green-tea-plantations-in-Munnar-Kerala-India-copy-1024x550.jpg') ;
        // background-size: cover;
        // background-color: black;
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

    <body style="background:white">
      <nav class="navbar navbar-default ">
        <div class="jumbotron" style="background-color:#ff6700">
          <div class="container">
          <h1>ആദ്യാക്ഷരം</h1>
            <p>LEARN MALAYALAM THE EASY WAY!!!</p>
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
          <a class="navbar-brand" href="#">Home</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/lesson-one">Lesson 1</a></li>
            <li><a href="/lesson-two">Lesson 2</a></li>
            <li><a href="/lesson-three">Lesson 3</a></li>
            <li><a href="/lesson-four">Lesson 4</a></li>
            <li><a href="/lesson-five">Lesson 5</a></li>
            <li><a href="/lesson-six">Lesson 6</a></li>
            <li><a href="/lesson-seven">Lesson 7</a></li>
            <li><a href="/lesson-eight">Lesson 8</a></li>
            <li><a href="/lesson-nine">Lesson 9</a></li>
            <li><a href="/lesson-ten">Lesson 10</a></li>
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
            <p>${description}</p </div>
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
