// scroll jquery
$.fn.focusWithoutScrolling = function(){
    var x = window.scrollX, y = window.scrollY;
    this.focus();
    window.scrollTo(x, y);
};

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

// Vue
new Vue({
    el:"#app",
    data: {
      aboutMeOpen: false,
      experienceOpen:false,
      skillsOpen: false,
      contactOpen: false,
      open:["aboutMeOpen","experienceOpen","skillsOpen","contactOpen"],
      id:[".aboutMeBtn", ".experienceBtn", ".skillsBtn", ".contactBtn"]
    },
    mounted(){
      this.aboutMeOpen = true
      $('.aboutMeBtn').focusWithoutScrolling();
      $("html").click(function(){
        $(".aboutMeBtn").focus();
      });
    },
    methods: {
      focused(getId){
        for (let i = 0; i <= this.id.length; i++) {
          let select = this.id[i];
          if (select == getId) {
            $(select).focus();
            $("html").click(function(){
              $(select).focus();
            });
          } else {
            $(select).focus();
          }
        }
      },
      opened(show){
        for (let i = 0; i <= this.open.length; i++) {
          let select = this.open[i];
          if (select == show) {
            eval("this." + select + " = true");
          } else {
            eval("this." + select + " = false");
          }
        }
      },
      aboutMe() {
        this.opened("aboutMeOpen")
        this.focused(".aboutMeBtn")
      },
      experience() {
        this.opened("experienceOpen")
        this.focused(".experienceBtn")
      },
      skills() {
        this.opened("skillsOpen")
        this.focused(".skillsBtn")
      },
      contact() {
        this.opened("contactOpen")
        this.focused(".contactBtn")
      }
    }
  });