function public()
{
	alert("Тут могла быть ваша реклама :^)");
}

// var subs = $("#subscribe-input").val();

$('a[href^="#"]').bind('click.smoothscroll',function (e) 
{
	e.preventDefault();
 
 	var target = this.hash,
	$target = $(target);
 
	$('html, body').stop().animate
	({
 		'scrollTop': $target.offset().top
 	}, 
 	1500, 'swing', function () 
 	{
 		window.location.hash = target;
 	});
 });












$("#contactus").click(function()
{
	public();
});
$("#learn").click(function()
{
	public();
});
$("#subscribe").click(function()
{
	$("#subscribe-input").val("");
	public();

});
$("#send-mes").click(function()
{
	$("#feedback-name").val("");
	$("#feedback-mail").val("");
	$("#feedback-message").val("");
	public();
});
// $("#subscribe-input").click(cleaners());
// $("#send-mes").click(cleaners());