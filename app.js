var express = require("express");
var app = express();
var mongoose = require('mongoose');
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/user");
var Quiz = require("./models/quiz.js");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
mongoose.connect("mongodb://localhost/BabyHealthStimulator");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "This is a scret Key",
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===============================================ROUTES==================================
app.get("/", function(req, res){
    res.render("index",{currentUser:req.user});
});

app.get('/home', function(req, res){
    res.render('home',{currentUser:req.user});
});


app.get('/firstTrimester',isLoggedIn, function(req, res){
   res.render('firstTrimester',{currentUser:req.user}); 
});

app.get('/secondTrimester', isLoggedIn,function(req, res){
   res.render('secondTrimester',{currentUser:req.user}); 
});

app.get('/thirdTrimester', isLoggedIn,function(req, res){
   res.render('thirdTrimester', {currentUser:req.user}); 
});


app.get('/firstTrimester_diet', isLoggedIn,function(req, res) {
    res.render('firstTrimester_diet',{currentUser:req.user});
});

app.get('/secondTrimester_diet', isLoggedIn,function(req, res) {
    res.render('secondTrimester_diet',{currentUser:req.user});
});

app.get('/thirdTrimester_diet', isLoggedIn,function(req, res) {
    res.render('thirdTrimester_diet',{currentUser:req.user});
});

app.get('/quiz', function(req, res) {
    res.render('quiz',{currentUser:req.user});
});

app.get("/profile", function(req, res){
    
    Quiz.find({username:req.user.username}, function(err,allquiz){
        if(err){
            console.log("Something went wrong in creating");
        }
        else{
           
            res.render("profile", {quiz:allquiz, currentUser:req.user});
            
        }
    })
   
        
});

app.get('/prof2', function(req, res) {
    res.send('jbakjdfa');
})

app.post('/profile', function(req, res) {
     var datetime = new Date();
     var date = datetime.toISOString().slice(0,10);
     var username = req.user.username;
     var q1 = req.body.q1;
     var q2_1 = req.body.q2_1;
     var q2_2 = req.body.q2_2;
     var q3_yes =req.body.yes3;
     var q3_no = req.body.no3;
     var q4_yes =req.body.yes4;
     var q4_no = req.body.no4;
     var q5_yes =req.body.yes5;
     var q5_no = req.body.no5;
     var q6_yes =req.body.yes6;
     var q6_no = req.body.no6;
     var q7_yes =req.body.yes7;
     var q7_no = req.body.no7;
     var q8_yes =req.body.yes8;
     var q8_no = req.body.no8;
     var q9_yes =req.body.yes9;
     var q9_no = req.body.no9;
     var q10_yes =req.body.yes10;
     var q10_no = req.body.no10;
     var q11_yes =req.body.yes11;
     var q11_no = req.body.no11;
     var q12_yes =req.body.yes12;
     var q12_no = req.body.no12;
     var q13_yes =req.body.yes13;
     var q13_no = req.body.no13;
     var newQuiz = {date:date, username:username, q1:q1, q2_1:q2_1, q2_2:q2_2, q3_yes:q3_yes, q3_no: q3_no, q4_yes:q4_yes, q4_no: q4_no, 
      q5_yes:q5_yes, q5_no: q5_no, q6_yes:q6_yes, q6_no: q6_no, q7_yes:q7_yes, q7_no: q7_no, q8_yes:q8_yes, q8_no: q8_no, q9_yes:q9_yes, q9_no: q9_no,
      q10_yes:q10_yes, q10_no: q10_no, q11_yes:q11_yes, q11_no: q11_no, q12_yes:q12_yes, q12_no: q12_no, q13_yes:q13_yes, q13_no: q13_no
     };
     Quiz.create(newQuiz, function(err, newlyCreated){
        if(err){
            console.log("Something went wrong in creating");
        }
        else{
             console.log('Great');
             res.redirect('/profile');
        }
    });

});



// AUTHENTICATION ROUTES===========================================
app.get('/login', function(req, res) {
    
    res.render('login',{currentUser:req.user});
});

app.get('/signup', function(req, res) {
    res.render('signup',{currentUser:req.user});
});
// handle signup logic
app.post('/signup', function(req, res){
        User.register(new User({username:req.body.username, email: req.body.email, name:req.body.name, mobile:req.body.mobile}), req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render('signup',{currentUser:req.user});
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/home');
        });
    });
});

//handle login logic
app.post("/login", passport.authenticate('local', {
    successRedirect: "/home",
    failureRedirect: "/login"
}), function(req, res){
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/home')
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The BabyHealth Stimulator Server has started");
}) 