//Button #1

$(".cyberpunk-button ").click(function() {
    let review = $(" .review-one").val();
    $(".cyberpunk-reviews").append("<li>" + review + "</li>");
});

//Button #2
$(".nba-button").click(function() {
    let review = $(" .reviews2").val();
    $(".reviews-nba").append("<li>" + review + "</li>");
});