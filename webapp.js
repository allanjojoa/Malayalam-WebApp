var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var login_status=0;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE malayalam_webapp", function(err, result) {
    if (err = "ER_DB_CREATE_EXISTS:") console.log("Database already created");
    else if (err) throw err;
    else console.log("Database created");
  });
  con.query("USE malayalam_webapp", function(err, result) {
    if (err) throw err;
    console.log("Datase Selected Sucessfully");
  });
  var sql = "CREATE TABLE users (username VARCHAR(255), email VARCHAR(255), password VARCHAR(255))";
  con.query(sql, function(err, result) {
    if (err = "ER_TABLE_EXISTS_ERROR") console.log("Table Already Created");
    else if (err) throw err;
    else console.log("Table created");
  });
  // con.end();
});

var lesson = {

  'lesson-one': {
    title: 'Lesson One|WebApp',
    heading: 'Lesson One',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/zVBY871JNi0" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-two': {
    title: 'Lesson Two|WebApp',
    heading: 'Lesson Two',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/NMDaQcxSSZo" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-three': {
    title: 'Lesson Three|WebApp',
    heading: 'Lesson Three',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/IDP-CTX83qE" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-four': {
    title: 'Lesson Four|WebApp',
    heading: 'Lesson Four',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/Yrp34qm5WL8" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-five': {
    title: 'Lesson Five|WebApp',
    heading: 'Lesson Five',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/T_eIdMnue24" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-six': {
    title: 'Lesson Six|WebApp',
    heading: 'Lesson Six',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/TCJff8GNX3k" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-seven': {
    title: 'Lesson Seven|WebApp',
    heading: 'Lesson Seven',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/4Vr2ZnBNVJk" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-eight': {
    title: 'Lesson Eight|WebApp',
    heading: 'Lesson Eight',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/pZ12CMGtEOM" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-nine': {
    title: 'Lesson Nine|WebApp',
    heading: 'Lesson Nine',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/e12EEi36cuc" frameborder="0" allowfullscreen></iframe>
                `
  },
  'lesson-ten': {
    title: 'Lesson Ten|WebApp',
    heading: 'Lesson Ten',
    description: 'abcd',
    content: `<iframe src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
                `
  }
};

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname,'ui','main.html'))
  if(login_status>0)
  res.send(createTemplate(lesson['lesson-one']));
  else res.redirect('login');
});
app.use(express.static(__dirname + '/ui'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b.html'));
});

app.get('/home', function(req, res) {
  if(login_status>0)
  res.send(createTemplate(lesson['lesson-one']));
  else res.redirect('login');
});

app.post("/login_post", function(req, res) {
  if (req.method == 'POST') {
    //var sql = "select * from users where email='allanjojoa@gmail.com' and password='allan';";
    var sql = "select * from users where email='" + req.body.userid + "' and password='" + req.body.password + "';";
    con.query(sql, function(err, result) {
      numRows = result.length;
      console.log(numRows);
      if (numRows > 0) {
        login_status=1;
        res.redirect('home');
      }
      else res.redirect('login');
    });

  }
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'su.html'));
});

app.post("/signup_post", function(req, res) {
  if (req.method == 'POST') {
    var sql = "INSERT INTO users (username,email,password) VALUES ('" + req.body.fname + "','" + req.body.email + "','" + req.body.password + "')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 new user");
    });
    res.redirect('login');
  }
});

app.get('/:lessonName', function(req, res) {
  if(login_status>0){
    var lessonName = req.params.lessonName;
    res.send(createTemplate(lesson[lessonName]));
  }
  else res.redirect('login');
});

var port = 8080;
app.listen(8080, function() {
  console.log(`Listening http://localhost:${port}`);
});

function createTemplate(data) {
  var title = data.title;
  var content = data.content;
  var heading = data.heading;
  var description = data.description;

  var htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <style>
    .embeded-video {
      position: relative
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ആദ്യാക്ഷര</title>

    <!-- css -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="css/nivo-lightbox.css" rel="stylesheet" />
    <link href="css/nivo-lightbox-theme/default/default.css" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
    <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
    <link href="css/flexslider.css" rel="stylesheet" />
    <link href="css/animate.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet">
    <link href="color/default.css" rel="stylesheet">
    <!-- =======================================================
          Theme Name: Shuffle
          Theme URL: https://bootstrapmade.com/bootstrap-3-one-page-template-free-shuffle/
          Author: BootstrapMade
          Author URL: https://bootstrapmade.com
      ======================================================= -->

  </head>

  <body id="page-top" data-spy="scroll" data-target=".navbar-custom">

    <section id="intro" class="home-slide text-light">

      <!-- Carousel -->
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="img/slide1.jpg" alt="First slide">
            <!-- Static Header -->
            <div class="header-text hidden-xs">
              <div class="col-md-12 text-center">
                <h2>
                                <span>ആദ്യാക്ഷരം</span>
                              </h2>
                <br>
                <h3>
                                <span>LEARN MALAYALAM THE EASY WAY!!!</span>
                              </h3>
                <br>
            </div>
            <!-- /header-text -->
          </div>
          </div>
        </div>
      </div>
      <!-- /carousel -->

    </section>
    <!-- /Section: intro -->


    <!-- Navigation -->
    <div id="navigation">
      <nav class="navbar navbar-custom" role="navigation">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div class="site-logo">
                <a href="/home" class="brand">ആദ്യാക്ഷരം</a>
              </div>
            </div>


            <div class="col-md-10">

              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                                                  <i class="fa fa-bars"></i>
                                                  </button>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="/lesson-one#lesson_section">Lesson 1</a></li>
                  <li><a href="/lesson-two#lesson_section">Lesson 2</a></li>
                  <li><a href="/lesson-three#lesson_section">Lesson 3</a></li>
                  <li><a href="/lesson-four#lesson_section">Lesson 4</a></li>
                  <li><a href="/lesson-five#lesson_section">Lesson 5</a></li>
                  <li><a href="/lesson-six#lesson_section">Lesson 6</a></li>
                  <li><a href="/lesson-seven#lesson_section">Lesson 7</a></li>
                  <li><a href="/lesson-eight#lesson_section">Lesson 8</a></li>
                  <li><a href="/lesson-nine#lesson_section">Lesson 9</a></li>
                  <li><a href="/lesson-ten#lesson_section">Lesson 10</a></li>
                </ul>
              </div>
              <!-- /.Navbar-collapse -->

            </div>
          </div>
        </div>
        <!-- /.container -->
      </nav>
    </div>
    <!-- /Navigation -->

    <!-- Section: about -->
    <section id="lesson_section" class="home-section color-dark bg-white">
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
      </div>
    </section>
    <!-- /Section: about -->








    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">

            <div class="text-center">
              <a href="#intro" class="totop"><i class="fa fa-angle-up fa-3x"></i></a>
              <p>&copy; Shuffle Theme - All Rights Reserved</p>
              <div class="credits">
                <!--
                                  All the links in the footer should remain intact.
                                  You can delete the links only if you purchased the pro version.
                                  Licensing information: https://bootstrapmade.com/license/
                                  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Shuffle
                              -->
                <a href="https://bootstrapmade.com/">Free Bootstrap Themes</a> by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Core JavaScript Files -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    <script src="js/jquery.flexslider-min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/jquery.scrollTo.js"></script>
    <script src="js/jquery.appear.js"></script>
    <script src="js/stellar.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/nivo-lightbox.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="contactform/contactform.js"></script>

  </body>

  </html>

                `;
  return htmlTemplate;
}
