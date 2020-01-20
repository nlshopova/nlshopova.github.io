$(document).ready(function() {
  var menuButton = $(".menu-button");
  var scrollLink = $(".main-nav a");
  var siteHeader = $(".site-header");

  // Responsive nav
  menuButton.click(function(e) {
    e.preventDefault();
    $(".main-nav ul").toggleClass("nav-open");
  });

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - siteHeader.height()
      },
      1000
    );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - siteHeader.height() - 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }

      if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
        var lastMenuItem = scrollLink.last();
        lastMenuItem.parent().addClass("active");
        lastMenuItem
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});
