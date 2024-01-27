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

  let c=[];
  let score=0,lost=0,sum=0;
  let x=0,countFather=0,count_notFather=0,y=1;
  let numberQuestion=0;
  let All_choose=document.querySelectorAll(".choose-item-content")

    document.querySelector(".finish").onclick=function(event)
    {
        score=0,lost=0,sum=0,countFather=0,count_notFather=0,y=1,numberQuestion=0;
         let All_input=document.querySelectorAll("input[type='radio']")
        for (let i=1;i<=All_input.length;i++)
        {
            if (i%4===0)
            {
                countFather++;
            }
            count_notFather++;

            if (All_choose[i-1].classList.contains("father"+y))
            {
                y++;
                numberQuestion++;
                count_notFather--;
            }

            if (document.getElementsByTagName("input")[i-1].checked )
            {
                if (document.getElementsByTagName("input")[i-1].hasAttribute("id"))
                {
                console.log(i)
                score++;
                }
                else
                {
                    lost++;
                    console.log("not"+count_notFather);
                    document.querySelector(`.not-father${count_notFather}`).style.border="4px solid #E71D36";
                }
            }
        
        }

        sum=score+lost ;
        if (sum>=numberQuestion/2)       
       {
            document.querySelector(".Description").style.display="block";
            document.querySelector(".result").innerHTML+=score+"/"+numberQuestion;
            document.querySelector(".overlie").style.opacity="1"
            document.querySelector(".overlie").style.visibility="visible";


            alert("yes")
            for (let i=1;i<=y;i++)
          {
            document.querySelector(".father"+i).style.border="4px solid #78C04C"
          }
        }
        if (sum<numberQuestion/2)
        {
            alert("يجب عليك أن تختار نصف الاسئلة على الأقل ");
            for (let i=0;i<All_choose.length;i++)
            {
                All_choose[i].style.border="1px solid #000DFF";
                console.log(All_choose[i])
            }
        }
        
    }

      document.querySelector(".back").onclick=function()
    {   
      document.querySelector(".Description").style.display="none";
        document.querySelector(".overlie").style.opacity="0";
        document.querySelector(".overlie").style.visibility="hidden";


    }