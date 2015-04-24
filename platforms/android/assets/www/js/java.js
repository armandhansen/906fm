///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////																								 //////////////////////
//////////////////////                             				 Start up                                            //////////////////////
//////////////////////																								 //////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
document.addEventListener("deviceready", onDeviceReady, false);	

function onDeviceReady() {
	new FastClick(document.body);
	$('#black_screen').css('width', x+'px');
	$('#black_screen').css('height', y+'px');
	$('#black_loader').css('margin-top', ((y/2)-70)+'px');
	if(x < 480)
	{
		$('body').css('zoom', '50%');
		$('#black_screen').css('width', '100%');
		$('#black_screen').css('height', '100%');
	}
	
	$('#black_screen').css('display', 'block');
	$.ajax({
		type: 'POST',
		url: 'http://www.906fm.mobi/app/loadLinks.php',
		success: function(data){
			$('#page_info').append(data);
			$('#black_screen').css('display', 'none');
			console.log("asd");
		},
		error: function(){
			$('#black_screen').css('display', 'none');
			alert("Sorry, unable to contact server. Please try again later or contact info@vaal.mobi.");
		}
	});
}

function openLink(thelink)
{
	navigator.app.loadUrl(thelink, { openExternal:true });
}


















































