(function($) {
  /* Newsletter */
  function setNewsletterCookie() {
    var d = new Date();
    var days = 10;
    d.setTime(d.getTime + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "sentNewsletter=true;" + expires + ";path=/";
  }
  function getNewsletterCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf("sentNewsletter=") == 0) {
        return c.substring("sentNewsletter=", c.length);
      }
    }
  }
  $(document).ready(function() {
    $("#update-newsletter-form").each(function() {
      var $node = $(this);
      $("body").css({
        paddingBottom: "130px"
      });
      var $close = $(
        "<a href='javascript:void(0);' class='close-button'>x</a>"
      );
      $node.find(".update-newsletter-form").append($close);
      if (getNewsletterCookie()) {
        $node.addClass("blocked");
        $("body").css({
          paddingBottom: 0
        });
      }
      $close.on("click", function(ev) {
        ev.preventDefault();
        $node.addClass("blocked");
        $("body").css({
          paddingBottom: 0
        });
      });
      $node.find("form").on("submit", function() {
        setNewsletterCookie();
        // $node.addClass("hidden");
      });
    });
  });

  // Hard translate newsletter form
  $(document).ready(function() {
    var lang = $("html").attr("lang");
    var placeholders = [];
    switch (lang) {
      case "pt-BR":
      case "pt":
      case "pt-PT":
        placeholders = ["Nome", "Endereço", "Assinar"];
        break;
      case "es":
      case "es-ES":
        placeholders = ["Nombre", "Email", "Subscribirse"];
      default:
        placeholders = ["Name", "Email address", "Subscribe"];
    }
    $("#update-newsletter-form").each(function() {
      var $node = $(this);
      $node.find('input[name="NOME"]').attr("placeholder", placeholders[0]);
      $node.find('input[name="EMAIL"]').attr("placeholder", placeholders[1]);
      $node.find('input[type="submit"]').attr("value", placeholders[2]);
    });
  });
})(jQuery);
