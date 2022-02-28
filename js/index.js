console.log("working")
const example = 'https://api.jikan.moe/v4/anime/1';



    $.getJSON(example, function(result){
        console.log(result);
    });
    


    const API = 'https://api.jikan.moe/v4/anime/1';

    $.getJSON(API, function(result){
        console.log(result);
        var image = result.data.images.jpg.large_image_url
        var image2 = result.data.images.webp.small_image_url
        var trailer = result.data.trailer.embed_url

        $(".image").css({'background-image': 'url('+ image +')'});
        $(".image2").css({'background-image': 'url('+ image +')'});
        $(".dynamicvid").attr("src",trailer);
        // $(".trailer").css({'background-image': 'url(https://youtu.be/G5-pt_sjeLo)'}); 
        $(".trailer").click(function(){
            // $(".trailer").css({'background-image': 'url('+ image +')'});
            $(".trailer").css({'background-image': 'url('+ trailer +')'});
        
        });
        console.log(trailer)
    });
   