marginL = 0;
function leftRight(obj){
	spaceLeft   = document.getElementById('photo-container').style.marginLeft;
	spaceLeft   = spaceLeft.replace('px', null);
	spaceLeft   = parseInt(spaceLeft);
	step        = 300;
	totalLength = document.querySelectorAll('.photo-item').length;
	totalLength *= -115;
	objId = obj.id;
	if(objId == 'left'){
		if(spaceLeft >= -step){
			marginL = 0;
		}
		else{
			marginL += step;
		}
	}
	if(objId == 'right'){
		if(spaceLeft <= totalLength + 900 + step){
			marginL = totalLength  + 900;
		}
		else{
			marginL -= step;
		}
	}
	document.getElementById('photo-container').style.marginLeft = marginL+'px';
}
function viewPhoto(obj){
	objUrl = obj.src;
	objAlt = obj.alt;
	document.getElementById('photo-display').innerHTML = '<img src="'+objUrl+'" id="selected-photo" alt="">';
	document.getElementById('commentary').innerHTML = objAlt;
	console.log(objAlt);
}


window.onload = function(){
	// load thumbnails
	photo       = document.querySelectorAll('.photo-item');
	photoLength = photo.length;
	for(i=0; i<photoLength; i++){
		photoW = photo[i].naturalWidth;
		photoH = photo[i].naturalHeight;
		if(photoW >= photoH){
			photo[i].style.height = '100px';
		}
		else{
			photo[i].style.width = '100px';
		}
	}
	conentW = photoLength * 115;
	document.getElementById('photo-container').style.width = conentW+'px';
	
	// load first photo
	firstPhoto    = document.querySelectorAll('.photo-item');
	firstPhoto    = firstPhoto[0];
	firstPhotoUrl = firstPhoto.src;
	firstPhotoAlt = firstPhoto.alt;
	document.getElementById('photo-display').innerHTML = '<img src="'+firstPhotoUrl+'" id="selected-photo" alt="">';
	document.getElementById('commentary').innerHTML = firstPhotoAlt;
}
