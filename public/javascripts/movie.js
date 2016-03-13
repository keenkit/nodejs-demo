$(function() {

    var mdata={};
    var urls = [
        '/javascripts/sample1.json',
        '/javascripts/sample2.json',
        '/javascripts/sample3.json'
    ];
    $('#samples button').each(function(i){
        var a = this
        $.getJSON(urls[i], function(data){
            a.onclick=function() {
                $('#c_editor').val($.toJSON(data));
            }
        });
    });

    $.getJSON(urls[0], function(data) {
        render_event_form();
    });

    var render_event_form=function(){
        $('#c_save').on('click',function(event){
            var data = {};
            data.content = $('#c_editor').val();
            mdata = $.parseJSON($('#c_editor').val());
            $.ajax({
                type: "POST",
                url: '/movie/add',
                data: data,
                success: function (data, textStatus){
                    if(data.success){
                        $('#msg').html('Save successfully!');
                        $('#msg').addClass('alert alert-success');
                        $(location).attr('href','/movie/'+mdata.title);
                    } else {
                        $('#msg').html(data.err);
                        $('#msg').addClass('alert alert-error');
                    }
                }
            });
        });
        $('#c_remove').on('click',function(event){
            var data = {};
            var removeTitle = $('#lbTitle').text();
            data.content = removeTitle
            $.ajax({
                type: "POST",
                url: '/movie/remove',
                data: data,
                success: function (data, textStatus){
                    if(data.success){
                        $('#msg').html('Remove successfully!');
                        $(location).attr('href','/movie/movielist');
                    } else {
                        $('#msg').html(data.err);
                        $('#msg').addClass('alert alert-error');
                    }
                }
            });
        });
    };
});