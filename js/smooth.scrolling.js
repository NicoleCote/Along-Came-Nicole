$(document).ready(function() {

		$(document).on('scroll', onScroll);

		$('footer img').click(function() {
			$('html,body').animate({"scrollTop":0}, 1000);
			return false;
		});

		$('[href^="#"]').click(function(){

			$(document).off('scroll');

			var target = $(this).attr('href');
			var offset = $($(this).attr('href')).offset();
			var top = offset.top;
			var activeLink = $(this);

			//console.log("height = " + height);
			
			//var scrolling = $(document).scrollTop();
			//console.log("scroll= " + scrolling);

			
			//console.log("target= " + target);
			//console.log("top= " + offset.top);
			//console.log("scroll= " + scrolling);
			

			$('ul li a').each(function(index, element){
				var value = $(this).attr('href');
				var link = $(this);

				console.log("value= " + value);

				if (target == value) {
					removeHighlight();
					highlight(activeLink);
					return false;
				} else {
					removeHighlight();
				}
		
			});

			$('html,body').animate({"scrollTop":top-52}, 1000, function () {
				$(document).on('scroll', onScroll);
			});
			return false;
		});

});

function highlight(activeLink) {
	activeLink.addClass('active');
}

function removeHighlight() {
	$('ul li a').removeClass('active');
}

function onScroll() {
	var scroll = $(document).scrollTop();

	$('ul li a').each(function(index, element) {
		var link = $(this);
		var value = $($(this).attr('href'));
		var top = value.position().top;
		var height = value.outerHeight(true);

		if((top-83) <= scroll && (top+height-83) > scroll) {
			removeHighlight();
			link.addClass('active');

		} else {
			link.removeClass('active');
		}
	})
		

}