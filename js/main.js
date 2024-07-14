// ! NAV FLY-MENU TOGGLE CLASS
const toggleMenu = () => {
  document.body.classList.toggle("fly-menu");
};
// ! JQUERY CODE
(function ($) {
  $(document).ready(function () {
    "use strict";
    $(window).resize(function () {
      const currentWidth = $(window).width();
      if (currentWidth > 768) {
        $("body").removeClass("fly-menu");
      }
    });
    // ! ACCORDION
    $(".accordion-title").click(function (e) {
      $(this).parent().parent().toggleClass("show");
    });
  });
})(jQuery);

// ! SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  reset: true,
});
sr.reveal("#home .img-content ");
sr.reveal("#home .text-content", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
});
sr.reveal("#trusted .title");
sr.reveal("#trusted .wrapper :nth-child(odd)", {
  duration: 800,
});
sr.reveal("#trusted .wrapper :nth-child(even)", {
  duration: 400,
  origin: "bottom",
});
sr.reveal("#direct-mail .title", {
  origin: "right",
  duration: 1000,
});
sr.reveal("#post-pilot .title", {
  origin: "left",
  duration: 1000,
  distance: "80px",
});
sr.reveal("#post-pilot .wrapper .item", {
  origin: "top",
  duration: 1100,
  distance: "70px",
});
sr.reveal("#your-brand .title", {
  origin: "top",
  duration: 800,
});
sr.reveal("#your-brand .wrapper :nth-child(odd)", {
  origin: "right",
  duration: 800,
});
sr.reveal("#your-brand .wrapper :nth-child(even)", {
  origin: "left",
  duration: 600,
});
sr.reveal("#fast-launch .title , #fast-launch .accordion-item", {
  origin: "top",
  duration: 500,
});
sr.reveal(
  "#footer .wrapper :nth-child(even),#footer .footer-bottom .brand-parent",
  {
    origin: "right",
    duration: 800,
  }
);
sr.reveal("#latest-trends .title", {
  duration: 600,
});
sr.reveal("#latest-trends .wrapper .item"),
  {
    duration: 900,
  };
sr.reveal("#try-post-pilot .img-container", {
  origin: "right",
});
sr.reveal("#try-post-pilot .text-content"),
  {
    origin: "left",
  };
sr.reveal("#footer .wrapper :nth-child(odd), #footer .footer-bottom .ctx-btn", {
  origin: "left",
  duration: 600,
});
