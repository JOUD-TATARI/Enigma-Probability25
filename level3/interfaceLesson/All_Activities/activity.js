$(document).ready(function(){

$(".question").hide();
$(".question1").show();

$(".side-right-item-content").click(function(){
    $(".side-right-item-content").removeClass("side-right-item-content-appearance");
    $(this).addClass("side-right-item-content-appearance");

    const current_tab=$(this).attr("data-attr")
    $(".question").hide();
    $("."+ current_tab).show()
    
})
}
);