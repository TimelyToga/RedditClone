/**
 * Created by Tim on 14/04/17.
 */
function upvote(id){
    var data = $.ajax("/post/upvote/" + id,
                        {success: function(json) {
                                    console.log(json);
                            $("#post-score-" + id).html(json);
                                    }});

    var rtext = data.responseText;
    // var score = JSON.parse(data);
    // console.log(rtext);
}