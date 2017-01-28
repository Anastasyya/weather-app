

$(document).ready(function(){



   $.ajax({
url: "http://api.wunderground.com/api/f0821e3125f130ed/conditions/astronomy/q/autoip.json",
type: "GET",
    dataType: "jsonp",
success: function(x) {

          $("#main_text").html("<strong>" + x.current_observation.weather + "</strong>" + " " );
          $(".city").html(x.current_observation.display_location.full + " ");
          $(".time").html(x.moon_phase.current_time.hour + ":" + x.moon_phase.current_time.minute);
          $(".degrees").html(x.current_observation.temp_c + "°");
            $(".description").html(x.current_observation.weather);
          $(".feels_like").html(x.current_observation.feelslike_c + "°");
          $(".humidity").html(x.current_observation.relative_humidity);
          $(".wind").html(x.current_observation.wind_kph);
          $(".visibility").html(x.current_observation.visibility_km + " km");
          $(".uv").html(x.current_observation.UV);

          var time = x.moon_phase.current_time.hour;
          var icon = x.current_observation.icon;
          if(time >= 12 && time <= 18 && icon !== "sunny" && icon !== "clear" && icon !== "mostlysunny" && icon !== "partlycloudy"){
            $("body").addClass("gradient_rainy_day").removeClass("gradient_default");
          }else if(time >= 12 && time <= 18){
            $("body").addClass("gradient_sunny_day").removeClass("gradient_default");
          }else if(time >= 19 && time <= 23 && icon !== "sunny" && icon !== "clear" && icon !== "mostlysunny" && icon !== "partlycloudy"){
            $("body").addClass("gradient_rainy_evening").removeClass("gradient_default");
          }else if(time >= 19 && time <= 23){
            $("body").addClass("gradient_clear_evening").removeClass("gradient_default");
          }else if(time >= 0 && time <= 5 && icon !== "sunny" && icon !== "clear" && icon !== "mostlysunny" && icon !== "partlycloudy"){
            $("body").addClass("gradient_rainy_night").removeClass("gradient_default");
          }else if(time >= 0 && time <= 5){
            $("body").addClass("gradient_clear_night").removeClass("gradient_default");
          }else if(time >= 6 && time <= 11 && icon !== "sunny" && icon !== "clear" && icon !== "mostlysunny" && icon !== "partlycloudy"){
            $("body").addClass("gradient_rainy_morning").removeClass("gradient_default");
          }else{$("body").addClass("gradient_clear_morning").removeClass("ggradient_default");}


          if ( icon == "rain" && icon == "chancerain"){
              $('#my_image').attr('src','icons_w/rain.png');
}else if(icon == "snow" || icon == "chanceflurries" || icon == "chancesleet" || icon == "chancesnow" || icon == "flurries" || icon == "sleet"){
              $('#my_image').attr('src','icons_w/snow.png');
}else if(icon == "tstorms" || icon == "chancetstorms"){
              $('#my_image').attr('src','icons_w/tstorms.png');
}else if(icon == "cloudy" || icon == "fog" || icon == "hazy" || icon == "mostlycloudy" || icon == "partlysunny"){
              $('#my_image').attr('src','icons_w/cloudy.png');
}else if( icon == "sunny" || icon == "clear" && time >= 6 && time <= 20 ){
              $('#my_image').attr('src','icons_w/sunny.png');
}else if( icon == "sunny" || icon == "clear" && time >= 21 && time <= 5 ){
              $('#my_image').attr('src','icons_w/clear.png');
}else if( icon == "mostlysunny" || icon == "partlycloudy" && time >= 6 && time <= 20  ){
              $('#my_image').attr('src','icons_w/partlycloudy.png');
}else{
              $('#my_image').attr('src','icons_w/nt_partlycloudy.png');}




          $('#f').on({'click': function(){
        $(".degrees").html(x.current_observation.temp_f);
        $(".feels_like").html(x.current_observation.feelslike_f);
        $(".visibility").html(x.current_observation.visibility_mi + " mi");
    }
});

$('#c').on({'click': function(){
$(".degrees").html(x.current_observation.temp_c + "°");
$(".feels_like").html(x.current_observation.feelslike_c + "°");
$(".visibility").html(x.current_observation.visibility_km + " km");
}
});

}
      });
  });
