
$(function(){

	$('input#input-height')[0].value = '';
	$('input#input-minWidth')[0].value = '';

	$('#customVisualHeight').submit(function(){

		var heightElm = $(this).find('input#input-height');
		var height;
		if(!(height = heightElm[0].value - 0)){
			height = heightElm.attr('placeholder');
		}
		//$('#headerVisual').animate({ height: height }, 200);
		$.rmScalingImage.setStyle({ maxHeight: height });

		var minWidthElm = $(this).find('input#input-minWidth');
		var minWidth;
		if(!(minWidth = minWidthElm[0].value - 0)){
			minWidth = minWidthElm.attr('placeholder');
		}
		$('#wrapper').animate({ minWidth: minWidth }, 200);
		return false;
	});
});