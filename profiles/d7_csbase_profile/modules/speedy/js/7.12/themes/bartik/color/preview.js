(function(a){Drupal.color={logoChanged:!1,callback:function(b,c,d,e,f,g){this.logoChanged||(a("#preview #preview-logo img").attr("src",Drupal.settings.color.logo),this.logoChanged=!0),Drupal.settings.color.logo==null&&a("div").remove("#preview-logo"),a("#preview",d).css("backgroundColor",a('#palette input[name="palette[bg]"]',d).val()),a("#preview #preview-main h2, #preview .preview-content",d).css("color",a('#palette input[name="palette[text]"]',d).val()),a("#preview #preview-content a",d).css("color",a('#palette input[name="palette[link]"]',d).val()),a("#preview #preview-sidebar #preview-block",d).css("background-color",a('#palette input[name="palette[sidebar]"]',d).val()),a("#preview #preview-sidebar #preview-block",d).css("border-color",a('#palette input[name="palette[sidebarborders]"]',d).val()),a("#preview #preview-footer-wrapper",d).css("background-color",a('#palette input[name="palette[footer]"]',d).val());var h=a('#palette input[name="palette[top]"]',d).val(),i=a('#palette input[name="palette[bottom]"]',d).val();a("#preview #preview-header",d).attr("style","background-color: "+h+"; background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from("+h+"), to("+i+")); background-image: -moz-linear-gradient(-90deg, "+h+", "+i+");"),a("#preview #preview-site-name",d).css("color",a('#palette input[name="palette[titleslogan]"]',d).val())}}})(jQuery);