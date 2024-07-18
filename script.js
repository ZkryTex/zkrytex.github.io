function openCity(evt, nombreCancion) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(nombreCancion).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function pauseOthers(ele) {
    $("audio").not(ele).each(function (index, audio) {
        audio.pause();
    });
}

function onlyPlayOneIn(container) {
    container.addEventListener("play", function(event) {
    audio_elements = container.getElementsByTagName("audio")
      for(i=0; i < audio_elements.length; i++) {
        audio_element = audio_elements[i];
        if (audio_element !== event.target) {
          audio_element.pause();
        }
      }
    }, true);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    onlyPlayOneIn(document.body);
  });

  $(document).ready(function() {
    var curPlaying;

    $(function() {
        $(".playback").click(function(e) {
            e.preventDefault();
            var song = $(this).next('audio')[0];
            if(song.paused){
                song.play();
                if(curPlaying) $("audio", "#"+curPlaying)[0].pause();
            } else { song.pause(); }
            curPlaying = $(this).parent()[0].id;
        });
    });
});

$(function(){
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
});
