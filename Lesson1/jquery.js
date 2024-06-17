$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide();
  });
  $("#show").click(function () {
    $("p").show();
  });
});


$(document).ready(function () {
    const test=[34,345,23];
    const total=0;
    const totalSum=test.reduce((total,sum)=>{
      return total+=sum;
    },0)
  $("button").click(function () {
    $("#div1").fadeTo(100, 0.02);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
    console.log("this is sum : ",totalSum);
  });
  $("#flip").hover(function () {
    $("#panel").replaceWith("<b>slow</b>").slideDown(1000).slideUp(1000);
  });
  $("#panel").load("sample.txt", function (response, statusTxt, xhr) {
    console.log(response);
    $(".test").html(response);
    console.log(statusTxt);
    console.log(xhr);
  });


  // $.get("API",function(data,status,xhr){})  : for catch api
  // $.posst("API",obj,function(data,status,xhr){})  : for post in api


//=================


  $.get("https://jsonplaceholder.typicode.com/users", function (data, status,xhr) {
    console.log(data);
    console.log(status);
    console.log(xhr);
  });
  $.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "This is title",
      body: "This is body",
    },
    function (data, status,xhr) {
      console.log(data, status,xhr);
    }
  );
  $(".test").waypoint(function(){
    $(".test").addClass("animate__shakeY animate__shakeX animate__shakeX");
    console.log("hellos");
  });
});

//   $(document).ready(function(){}); for USE OR OPEN IN JQUERY
//Event

// change : for change text in form
// click : for click
// focus  : for focus in form
// hover : for hover
// keydown :
// keyup   :
// keypress :
// load : for load data
// mouseenter : hover in element
// mouseleave : for hover out element
// scroll : for scroll
// submit : for submit form

// $("IdNameTag").click(function(){});  for click and event
// $("IdNameTag").on("event",function(){}); : for click related to event



// $("IdNameTag").hide();  : for hiddent
// $("IdNameTag").show();  : for show
// $("IdNameTag").toggle(); : for hiddent and show
// $("IdNameTag").fadeOut(numDelay);   : for hiddent but have animate
// $("IdNameTag").fadeIn(numDelay);       : for show but have animate
// $("IdNameTag").fadeToggle(numDelay);   : for show and hiddent but have animate
// $("IdNameTag").fadeTo(numDelay,numOpacity);   : for add opacity
// $("IdNameTag").slideToggle(numDelay);  : for slide down and show
// $("IdNameTag").slideDown(numDelay);    : for slide up and show
// $("IdNameTag").slideUp(numDelay);      : slide show down and hide up
// $("IdNameTag").animate({cssProperties},numDelay);   : for animation
// $("IdNameTag").stop();  : when something work it will paused or stop it
// $("IdNameTag").css({"propertyname":"value",..});  : style css

//Jquery HTML  or set  ("..")
// $("IdNameTag").html();  show text from element
// $("IdNameTag").text();  show text but have markup
// $("IdNameTag").val();   show value from element
// $("IdNameTag").attr("name"); show attribute



// $("IdNameTag").append("letter"); : before end
// $("IdNameTag").prepend("letter");: afterBegin
// $("IdNameTag").after("letter");  : after end
// $("IdNameTag").before("letter"); : beforeBegin
// $("IdNameTag").remove();  : for remove element
// $("IdNameTag").empty();   : it will be empty
// $("IdNameTag").addClass("nameClass"); : for add class
// $("IdNameTag").removeClass("nameClass"); : for remove class
// $("IdNameTag").toggleClass("nameClass"); : for remove and add class
// $("IdNameTag").replaceWith("text"); : replace text of element
// $("IdNameTag").width() , height() , innerWidth() , innerHeight() , outerWidth() , outerHeight : chect attribute or set it

//Jquery Traversing
// $("IdNameTag").parent(); : catch parent of element
// $("IdNameTag").parents(); : catch big parent of element
// $("IdNameTag").parentsUntil("IdNameTag"); : catch element and expand

// $("IdNameTag").children(); : catch parent but children work











// $("IdNameTag").find("IdNameTag"); : catch parent but children find work
// $("IdNameTag").siblings(); : work all equal element but myself not work
// $("IdNameTag").next(); : work next equal element but myself not work
// $("IdNameTag").nextAll(); : work next all equal element but myself not work
// $("IdNameTag").nextUntil("IdNameTag"); : work next until equal element but myself not work
// $("IdNameTag").prev(); : work previous equal element but myself not work
// $("IdNameTag").prevAll(); : work previous all equal element but myself not work
// $("IdNameTag").prevUntil(); : work previous until equal element but myself not work


// $("IdNameTag").first(); : work first element by the same
// $("IdNameTag").last(); : work last element by the same
// $("IdNameTag").eq(index); : work index element by the same
// $("IdNameTag").filter("IdNameTag"); : work have element
// $("IdNameTag").not(); : dont work because no element
//ajax
// $.get("API",function(data,status,xhr){})  : for catch api
  // $.posst("API",obj,function(data,status,xhr){})  : for post in api