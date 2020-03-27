$(function(){
  function buildHTML(post){
  var html = `<div class="main__message__box">
                <div class="main__message__box__text">
                  ${post.content}
                    </div>
                    <div class="main__message__box__data">
                      <div class="main__message__box__data__name">
                      ${post.user}
                      </div>
                      <div class="main__message__box__data__date">
                      ${post.created_at}
                      </div>
                    </div>
                </div>`
        return html;
  }
  $('#new_post').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__message').append(html).animate({ scrollTop: $('.main__message')[0].scrollHeight});
      $('form')[0].reset();
      $('input').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('input').prop('disabled', false);
    })
  });
});