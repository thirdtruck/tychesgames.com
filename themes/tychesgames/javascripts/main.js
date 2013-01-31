$(function() {
	$('.tabbable li').each(function() {
		var $tab = $(this);
		$tab.click(function(e) {
			e.preventDefault();
			$(this).tab('show');
		});
	});
	$('.tabbable li:first a').tab('show');
});
