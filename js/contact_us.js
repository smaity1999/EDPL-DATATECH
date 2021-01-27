window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var mybutton = document.getElementById("scrl-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

$(document).on('click', '#scrl-top-btn', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const EDPL = { lat: 22.422945, lng: 87.322691 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        scrollwheel: false,
        center: EDPL
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        title: "Eastern Datatech Pvt. Ltd.",
        position: EDPL,
        map: map,
    });
}

// To prevent flickering on mobile devices
$(document).resize(function() {
    $("body").css("display", "none");
    $("body").fadeIn(2000);
});