$(function() {

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
	});

	$(".arrow-bottom").click(function () {
		$("html, body").animate({ scrollTop : $(".main-head"). height()+120 }, "slow");
		return false;
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();

	$(".section-4").waypoint(function () {
		$(".section-4 .card").each(function (index) {
				var ths = $(this);
				setInterval(function () {
					ths.removeClass("card-off").addClass("cards-on")
				}, 150*index);
		});
	}, {
		offset : "25%"
	});

	$(".section-5").waypoint(function () {
		$(".section-5 .tc-item").each(function (index) {
				setTimeout(function () {
					var myAnimation = new DrawFillSVG({
				      elementId: "tc-svg-" + index
				    });
				}, 700*index);
		});
		this.destroy();
	}, {
		offset : "25%"
	});

	$(".section-6").waypoint(function () {
		$(".section-6 .card").each(function (index) {
				var ths = $(this);
				setInterval(function () {
					ths.removeClass("card-off").addClass("cards-on")
				}, 150*index);
		});
	}, {
		offset : "25%"
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		loop : true,
		navText : ""
	});

	$(".section-head h2, .section-head p").animated("fadeInRight");
	$(".info-item-wrap").animated("zoomIn");

	$(".section-2").waypoint(function () {
		$(".s2-item").each(function (index) {
				var ths = $(this);
				setInterval(function () {
					ths.addClass("on")
				}, 150*index);
			});
		}, {
			offset : "25%"
	});

	$(".top").click(function () {
		$("html, body").animate({ scrollTop : 0 }, "slow");
		return false;
	});

	$(".homesect .section-bottom .buttons").click(function () {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
	  type:'inline',
		mainClass : 'mfp-forms'
	});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
