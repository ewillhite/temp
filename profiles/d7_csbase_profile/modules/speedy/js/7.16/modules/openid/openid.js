(function(a){Drupal.behaviors.openid={attach:function(b){var c=a(".form-item-name, .form-item-pass, li.openid-link"),d=a(".form-item-openid-identifier, li.user-link"),e=a.cookie("Drupal.visitor.openid_identifier");if(!a("#edit-openid-identifier.openid-processed").length){e&&a("#edit-openid-identifier").val(e);if(a("#edit-openid-identifier").val()||location.hash=="#openid-login")a("#edit-openid-identifier").addClass("openid-processed"),c.hide(),d.css("display","block")}a("li.openid-link:not(.openid-processed)",b).addClass("openid-processed").click(function(){return c.hide(),d.css("display","block"),a("#edit-name, #edit-pass").removeClass("error"),a("div.messages.error").hide(),a("#edit-openid-identifier")[0].focus(),!1}),a("li.user-link:not(.openid-processed)",b).addClass("openid-processed").click(function(){return d.hide(),c.css("display","block"),a("#edit-openid-identifier").val("").removeClass("error"),a("div.messages.error").css("display","block"),a("#edit-name")[0].focus(),!1})}}})(jQuery);