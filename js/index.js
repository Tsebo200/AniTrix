
$(document).ready(function(){

    let quoteOne = $('.Qone').find('p').first();
    let quoteTwo = $(".Qtwo");
    let quoteThree = $(".Qthree");
    
    let allQuotes = [quoteOne, quoteTwo, quoteThree];

    var i = 0;
    setInterval(function() {
        i = (i + 1) % allQuotes.length;
        quoteOne.fadeOut(750, function(){
            $(this).allQuotes[i];
            $(this).fadeIn(750);
        })
    }, 5000);
});

console.log(quotesTwo)

//     let quoteOne = $(".Qone").hide();
//     let quoteTwo = $(".Qtwo").hide();
//     let quoteThree = $(".Qthree").hide();

//     let allQuotes = [quoteOne, quoteTwo, quoteThree]
//     for (let i = 0; i < allQuotes.length; i++) {
//      setInterval(function(){
//         $(quoteTwo).fadeIn(5000);
//      });
    
// };


console.log("working")


console.log("working")

const example = 'https://api.jikan.moe/v4/anime';



    $.getJSON(example, function(result){
        console.log(result);
        let objectCount = result.data.length;
        let randomSelection = Math.floor(Math.random() * objectCount);
        console.log(randomSelection);
  
    

    // const API = result[randomSelection].data
    console.log(result.data[randomSelection].images.jpg.large_image_url)
    

    //  $.getJSON(API, function(result){
        console.log(result);
        if(result.data[randomSelection].title == "Witch Hunter Robin"){
            result.data[randomSelection].title = " ";
        }
        let image = result.data[randomSelection].images.jpg.large_image_url;
        let image2 = result.data[randomSelection].images.webp.small_image_url;
        let trailer = result.data[randomSelection].trailer.embed_url;
        let title = result.data[randomSelection].title;
        let title2 = result.data[randomSelection].title_japanese;
        let year = result.data[randomSelection].year;
        let score = result.data[randomSelection].score;
        let rating = result.data[randomSelection].rating;
        let totalEpisodes = result.data[randomSelection].episodes;
        let duration = result.data[randomSelection].duration;
        let synopsis = result.data[randomSelection].synopsis;
        let genres =" "
        console.log(synopsis)
      

        let storeAnimeId = result.data[randomSelection].mal_id;
        const API2 = 'https://api.jikan.moe/v4/anime/'+ storeAnimeId + '/staff';
        $.getJSON(API2, function(result){
            console.log(result);
            let producer = result.data[0].person.name;
            $(".producer").text(producer).css({'color': 'white'});
            console.log(producer)   
        });

        console.log(storeAnimeId)
      
        console.log(result.data[randomSelection].genres.length)
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
        
        console.log(trailer)
        
            if(trailer === null){
                $(".poster-desktop").removeClass("d-block")
                $(".poster-desktop").addClass("d-none")
            }

            // if(trailer === null){
            //     $(".poster-desktop").show()
            //     console.log(trailer)
    
            // }else{
            //     $(".poster-desktop").hide()
            // }
       
    
    

        for(let i = 0; i < result.data[randomSelection].genres.length; i++){
            genres +=  result.data[i].genres[i].name + " / " 
            console.log(result.data[i].genres[i].name);
        };
        $(".genre").text(genres).css({'color': 'white'});
      
    
       
        $(".dynamicvid").attr("src",trailer);
        // $(".trailer").css({'background-image': 'url(https://youtu.be/G5-pt_sjeLo)'}); 
        $(".trailer").click(function(){
            // $(".trailer").css({'background-image': 'url('+ image +')'});
            $(".trailer").css({'background-image': 'url('+ trailer +')'});

            
    
        // });

    });

});

   