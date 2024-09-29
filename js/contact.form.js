(function($) {
    "use strict";


    $.fn.conformyEmailValidate = function() {
        var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegexp.test(String($(this).val()));
    };

    $.fn.conformyPhoneValidate = function() {
        var phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return phoneRegexp.test($(this).val());
    };

    var contactEmail = $("input[name=contact_email]");
    var contactPhone = $("input[name=contact_phone]");

    contactEmail.on("keyup", function() {
        if ($(this).val().trim().length > 0) {
            if (!$(this).conformyEmailValidate()) {
                contactEmail.parent().removeClass("success").addClass("error");
            } else {
                contactEmail.parent().removeClass("error").addClass("success");
            }
        } else {
            contactEmail.parent().removeAttr("class");
        }
    });

    contactPhone.on("keyup", function() {
        if ($(this).val().trim().length > 0) {
            if (!$(this).conformyPhoneValidate()) {
                contactPhone.parent().removeClass("success").addClass("error");
            } else {
                contactPhone.parent().removeClass("error").addClass("success");
            }
        } else {
            contactPhone.parent().removeAttr("class");
            contactPhone.parent().addClass("error");
        }
    });

    $("select[name=contact_subject]").on("change", function() {
        var item = $(this);
        var sNull = item.find("option").eq(0).val();
        if (item.val() == sNull) {
            item.parent().removeClass("success").addClass("error");
        } else {
            item.parent().removeClass("error").addClass("success");
        }
    });

    $(".cf-form-control:not('[name=contact_email],[name=contact_phone]')").on("keyup", function() {
        if ($(this).val().trim().length > 0) {
            $(this).parent().removeClass("error").addClass("success");
        } else {
            $(this).parent().removeAttr("class").addClass("error");
        }
    });

    let textCaptcha = $("#txtCaptcha");
    let textCaptchaSpan = $('#txtCaptchaSpan');
    let textInput = $('#txtInput');

    function randomNumber() {
        let code = Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit number
        textCaptcha.val(code);
        textCaptchaSpan.html(code);
    }

    randomNumber();

    function validateCaptcha() {
        return textCaptcha.val() == textInput.val();
    }

    textInput.on("keyup", function() {
        if (validateCaptcha()) {
            $(this).parent().removeClass("error").addClass("success");
        } else {
            $(this).parent().removeAttr("class").addClass("error");
        }
    });

    $("#send_message").on("click", function(event) {
        event.preventDefault(); // Prevent form submission

        var $this = $('#contactForm');
        var contact_name = $this.find('input[name="contact_name"]').val().trim();
        var contact_email = $this.find('input[name="contact_email"]').val().trim();
        var contact_phone = $this.find('input[name="contact_phone"]').val().trim();
        var contact_subject = $this.find('select[name="contact_subject"]').val().trim();
        var contact_message = $this.find('textarea[name="contact_message"]').val().trim();
        var validateEmail = $this.find('input[name="contact_email"]').conformyEmailValidate();
        var validatePhone = $this.find('input[name="contact_phone"]').conformyPhoneValidate();
        var selectedNull = $this.find('select[name="contact_subject"]').find("option").eq(0).val();

        if (contact_name === '' || contact_email === '' || contact_phone === '' || contact_message === '' || textInput.val() === '' || contact_subject === selectedNull) {
            $this.find("li").addClass("error");
            if ($("#empty-form").css("display") === "none") {
                $('#empty-form').stop().slideDown().delay(3000).slideUp();
            }
            return false;
        } else if (!validateEmail) {
            $('input[name="contact_email"]').parent().removeClass("success").addClass("error");
            if ($('#email-invalid').css("display") === "none") {
                $('#email-invalid').stop().slideDown().delay(3000).slideUp();
            }
            return false;
        } else if (!validatePhone) {
            $('input[name="contact_phone"]').parent().removeClass("success").addClass("error");
            if ($('#phone-invalid').css("display") === "none") {
                $('#phone-invalid').stop().slideDown().delay(3000).slideUp();
            }
            return false;
        } else if (contact_subject === selectedNull) {
            $('select[name="contact_subject"]').parent().removeClass("success").addClass("error");
            if ($('#subject-alert').css("display") === "none") {
                $('#subject-alert').stop().slideDown().delay(3000).slideUp();
            }
            return false;
        } else if (!validateCaptcha()) {
            $("#textInput").parent().find("span").removeClass("success").addClass("error");
            if ($('#security-alert').css("display") === "none") {
                $('#security-alert').stop().slideDown().delay(3000).slideUp();
            }
            return false;
        } else {
            emailjs.send("service_ymvn3xh", "template_d3trdog", {
                contact_name: contact_name,
                contact_email: contact_email,
                contact_phone: contact_phone,
                contact_subject: contact_subject,
                contact_message: contact_message,
                recipient_email: "mangexanywa@gmail.com" // New recipient email
            }).then(function(response) {
                $(".cf-form-control").parent().removeAttr("class");
                $("#contactForm")[0].reset();
                $('#success_mail').show();
                $('#success_mail').stop().slideDown().delay(3000).slideUp();
                randomNumber();
            }, function(error) {
                $("#error_mail").find("p").html(error.text);
                $('#error_mail').stop().slideDown().delay(3000).slideUp();
                randomNumber();
            });
        }
    });
})(window.jQuery);
