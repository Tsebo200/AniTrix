console.log("working")
const example = 'https://api.jikan.moe/v4/anime/1';



    $.getJSON(example, function(result){
        console.log(result);
    });
    


    const API = 'https://api.jikan.moe/v4/anime/1';
    

    $.getJSON(API, function(result){
        console.log(result);
        let image = result.data.images.jpg.large_image_url;
        let image2 = result.data.images.webp.small_image_url;
        let trailer = result.data.trailer.embed_url;
        let title = result.data.title;
        let title2 = result.data.title_japanese;
        let year = result.data.year;
        let score = result.data.score;
        let rating = result.data.rating;
        let genres = " "; 
        let totalEpisodes = result.data.episodes;
        let duration = result.data.duration;
        let synopsis = result.data.synopsis;
        console.log(synopsis)
        // let genres = result.data.genres[i].name;
        // let producer = result.data.

        $(".poster-iphone").css({'background-repeat': 'no-repeat','background-image': 'url('+ image +')'});
        $(".poster-ipad").css({'background-repeat': 'no-repeat','background-image': 'url('+ image +')'});
        $(".poster-desktop").css({'background-repeat': 'no-repeat','background-image': 'url('+ image +')'});
        $(".image2").css({'background-image': 'url('+ image +')'});
        $(".title").text(title).css({'color': 'white'});
        $(".title2").text(title2).css({'color': 'white'});
        $(".year").text(year).css({'color': 'white'});
        $(".score").text(score).css({'color': 'white'});
        $(".rating").text(rating).css({'color': 'white'});
        $(".total-episodes").text(totalEpisodes + " " +"Episodes").css({'color': 'white'});
        $(".duration").text(duration).css({'color': 'white'});
        $(".synopsis").text(synopsis).css({'color': 'white'});
        
        for(let i = 0; i < result.data.genres.length; i++){
            genres +=  result.data.genres[i].name + " / " 
        }
        $(".genre").text(genres).css({'color': 'white'});
       
        
       
        $(".dynamicvid").attr("src",trailer);
        // $(".trailer").css({'background-image': 'url(https://youtu.be/G5-pt_sjeLo)'}); 
        $(".trailer").click(function(){
            // $(".trailer").css({'background-image': 'url('+ image +')'});
            $(".trailer").css({'background-image': 'url('+ trailer +')'});
        
        });


        const API2 = 'https://api.jikan.moe/v4/anime/1/staff';
        $.getJSON(API2, function(result){
            console.log(result);
            let producer = result.data[0].person.name;
            $(".producer").text(producer).css({'color': 'white'});
            
        });
    });

  

   