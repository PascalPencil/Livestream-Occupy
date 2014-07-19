$(function() {
	headChannel();
	loadPlayer('globalrevolution');
});

function headChannel() {
	$('#wethepeople a').click(function() {
		var changeChannel = $(this).attr('id');
		loadPlayer(changeChannel);
	});
	$('#hello').change(function() {
		var changeChannel2 = $(this).attr('value');
		loadPlayer(changeChannel2);
	});
}

function loadPlayer(channel){
	$("#player").html('<iframe width="520" height="318" src="http://cdn.livestream.com/embed/'+channel+'?layout=4&color=0xd9d9d9&autoPlay=true&mute=false&iconColorOver=0x000000&iconColor=0x000000&allowchat=true&height=318&width=520" style="border:0;outline:0" frameborder="0" scrolling="no"></iframe>');
}
