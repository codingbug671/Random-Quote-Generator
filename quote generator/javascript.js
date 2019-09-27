$(document).ready(function(){

  var quote;
  var author;
  function getnewQuote(){
  $.ajax({
    url:'http://api.forismatic.com/api/1.0/',
    jsonp:'jsonp',
    dataType:'jsonp',
    data:
    {
      method: 'getQuote',
      lang:'en',
      format:'jsonp'
    },
    success:function(response){
      quote=response.quoteText;
      author=response.quoteAuthor;
      $('#quote').text(quote);
      if(author){
        $('#author').text('said by '+ author);
      }
      else
      {
        $('#author').text('-unknown');
      }
    }
  });
}
$('.get-quote').on('click',function(){
  
 getnewQuote();
});
$('.share-quote').on('click',function(){
  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote+'----'+author));
 
});
 

                  });