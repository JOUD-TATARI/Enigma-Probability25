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
  let All_choose_mob=document.querySelectorAll(".Responsive-mob .choose-item-content")
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
                    if (count_notFather===25 || count_notFather===26 || count_notFather===27)
                    {
                      document.querySelector(`.not-father${count_notFather} .choose-item-content-img rect`).setAttribute("stroke","#E71D36")
                    }
                    else
                    {
                    document.querySelector(`.not-father${count_notFather}`).style.border="4px solid #E71D36";
                    }
                }
            }
        
        }

        sum=score+lost ;
        let persent=(score/numberQuestion)*100;
        if (sum>=numberQuestion/2)       
       {
        // alert(persent)
            document.querySelector(".Responsive-lab .Description").style.display="block";
            // document.querySelector(".Description h2").innerHTML=" ";
            if (persent<20)
            {
              document.querySelector(" .Responsive-lab .Description h2").innerHTML=" ارجع ادرس مشان ما تحمل المادة ";
            }
             if (persent>=20 && persent<40)
            {
              document.querySelector(".Responsive-lab .Description h2").innerHTML=" يعني مااشي حالك .. بترفعها بدعاء الوالدة ";
            }

            if (persent>=40 && persent<60)
            {
              document.querySelector(".Responsive-lab .Description h2").innerHTML="بترفع المادة ع شفا حفرة .. بقى انت وحظك  "
            }
             if (persent>=60 && persent<80)
            {
              document.querySelector(".Responsive-lab .Description h2").innerHTML="دارس منيح .. بترفعها باذن الله.. لا تخاف  "
            }
             if (persent>=80 && persent<=100)
            {
              document.querySelector(".Responsive-lab .Description h2").innerHTML="وااو .. نيرد مخفي  "
            }

            document.querySelector(".Responsive-lab .result").innerHTML=" "
            document.querySelector(".Responsive-lab .result").innerHTML="نتيجتك هي : " + score+"/"+numberQuestion;
            document.querySelector(".Responsive-lab .overlie").style.opacity="1"
            document.querySelector(".Responsive-lab .overlie").style.visibility="visible";

            for (let i=1;i<=y;i++)
          {
            document.querySelector(".father"+i).style.border="4px solid #78C04C"; 
          }
        }
        if (sum<numberQuestion/2)
        {
            alert("يجب عليك أن تختار نصف الاسئلة على الأقل ");
            for (let i=0;i<All_choose.length;i++)
            {
              if (i===All_choose.length-4 || i===All_choose.length-3 || i===All_choose.length-2 ||  i===All_choose.length-1)
              {
                continue;
              }
                All_choose[i].style.border="1px solid #000DFF";
                console.log(All_choose[i])
            }
        }
        
    }

      document.querySelector(".Responsive-lab a.back").onclick=function()
    {   
      document.querySelector(".Responsive-lab .Description").style.display="none";
        document.querySelector(".Responsive-lab .overlie").style.opacity="0";
        document.querySelector(".Responsive-lab .overlie").style.visibility="hidden";
    }
    document.querySelector(".dropdown-menu-levels-content div a").onclick=function(e)
    {
      e.preventDefault();
    }





    // let Fathers_mob=document.querySelectorAll(".Responsive-mob .father")

    document.querySelector(".finish-mob").onclick=function()
    {
        score=0,lost=0,sum2=0,countFather=0,count_notFather=0,y=1,numberQuestion=0;
         let All_input=document.querySelectorAll(".Responsive-mob input[type='radio']")
        for (let i=1;i<=All_input.length;i++)
        {
            if (i%4===0)
            {
              countFather++;
            }
            count_notFather++;

            if (All_choose_mob[i-1].classList.contains("father"+y))
            {
                y++;
                numberQuestion++;
                count_notFather--;
            }

            if (document.getElementsByClassName("in")[i-1].checked )
            {
                if (document.getElementsByClassName("in")[i-1].hasAttribute("id"))
                {
                console.log(i)
                score++;
                console.log("score="+score)
                }
                else
                {
                  lost++;
                  console.log("lost="+lost)
                    console.log("not"+count_notFather);
                    document.querySelector(`.Responsive-mob .not-father${count_notFather}`).style.border="4px solid #E71D36";
                    
                    
                }
            }
             sum2=score+lost ;
        }

     
       
        let persent=(score/numberQuestion)*100;
        if (sum2>=numberQuestion/2 )       
       {
            document.querySelector(".Responsive-mob .Description").style.display="block";
            // document.querySelector(".Description h2").innerHTML=" ";
            if (persent<20)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML=" ارجع ادرس مشان ما تحمل المادة ";
            }
             if (persent>=20 && persent<40)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML=" يعني مااشي حالك .. بترفعها بدعاء الوالدة ";
            }

            if (persent>=40 && persent<60)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="بترفع المادة ع شفا حفرة .. بقى انت وحظك  "
            }
             if (persent>=60 && persent<80)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="دارس منيح .. بترفعها باذن الله.. لا تخاف  "
            }
             if (persent>=80 && persent<=100)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="وااو .. نيرد مخفي  "
            }

            document.querySelector(".Responsive-mob .result").innerHTML=" "
            document.querySelector(".Responsive-mob .result").innerHTML="نتيجتك هي : " + score+"/"+numberQuestion;
            document.querySelector(".Responsive-mob .overlie").style.opacity="1"
            document.querySelector(".Responsive-mob .overlie").style.visibility="visible";
            document.querySelector(".left-arrow").style.zIndex=-1;
            document.querySelector(".right-arrow").style.zIndex=-1;

            // for (let i=1;i<=y;i++)
          // {
            // if (i===9)
            // {
            //   document.querySelector(`.father${i} .choose-item-content-img rect`).setAttribute("stroke","#78C04C")
            // }
            // else
            // {
            // document.querySelector(".Responsive-mob .question .father"+i).style.border="4px solid #78C04C";
            // }
          // }
        }
        if (sum2<numberQuestion/2 )
        {
            alert("يجب عليك أن تختار نصف الاسئلة على الأقل ");
            for (let i=0;i<All_choose_mob.length;i++)
            {
             
                All_choose_mob[i].style.border="1px solid #000DFF";
                console.log(All_choose_mob[i])
            }
        }

      
        document.querySelector(".Responsive-mob .back").onclick=function()
    {   
      document.querySelector(".left-arrow").style.zIndex=1;
      document.querySelector(".right-arrow").style.zIndex=1;
      document.querySelector(".Responsive-mob .Description").style.display="none";
      document.querySelector(".Responsive-mob .overlie").style.opacity="0";
      document.querySelector(".Responsive-mob .overlie").style.visibility="hidden";
       for (let i=1;i<=y;i++)
       {
        
        document.querySelector(".Responsive-mob .question .father"+i).style.border="4px solid #78C04C";

       }
    }

    }



    document.querySelector(".number-question-part-cancel").onclick=function()
    {
        score=0,lost=0,sum2=0,countFather=0,count_notFather=0,y=1,numberQuestion=0;
         let All_input=document.querySelectorAll(".Responsive-mob input[type='radio']")
        for (let i=1;i<=All_input.length;i++)
        {
            if (i%4===0)
            {
              countFather++;
            }
            count_notFather++;

            if (All_choose_mob[i-1].classList.contains("father"+y))
            {
                y++;
                numberQuestion++;
                count_notFather--;
            }

            if (document.getElementsByClassName("in")[i-1].checked )
            {
                if (document.getElementsByClassName("in")[i-1].hasAttribute("id"))
                {
                console.log(i)
                score++;
                console.log("score="+score)
                }
                else
                {
                  lost++;
                  console.log("lost="+lost)
                    console.log("not"+count_notFather);
                    document.querySelector(`.Responsive-mob .not-father${count_notFather}`).style.border="4px solid #E71D36";
                    
                }
            }
             sum2=score+lost ;
        }

     
      
        let persent=(score/numberQuestion)*100;
        if (sum2>=numberQuestion/2 )       
       {
        alert(persent)
            document.querySelector(".Responsive-mob .Description").style.display="block";
            // document.querySelector(".Description h2").innerHTML=" ";
            if (persent<20)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML=" ارجع ادرس مشان ما تحمل المادة ";
            }
             if (persent>=20 && persent<40)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML=" يعني مااشي حالك .. بترفعها بدعاء الوالدة ";
            }

            if (persent>=40 && persent<60)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="بترفع المادة ع شفا حفرة .. بقى انت وحظك  "
            }
             if (persent>=60 && persent<80)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="دارس منيح .. بترفعها باذن الله.. لا تخاف  "
            }
             if (persent>=80 && persent<=100)
            {
              document.querySelector(".Responsive-mob .Description h2").innerHTML="وااو .. نيرد مخفي  "
            }

            document.querySelector(".Responsive-mob .result").innerHTML=" "
            document.querySelector(".Responsive-mob .result").innerHTML="نتيجتك هي : " + score+"/"+numberQuestion;
            document.querySelector(".Responsive-mob .overlie").style.opacity="1"
            document.querySelector(".Responsive-mob .overlie").style.visibility="visible";
            document.querySelector(".left-arrow").style.zIndex=-1;
            document.querySelector(".right-arrow").style.zIndex=-1;

        }
        if (sum2<numberQuestion/2 )
        {
            alert("يجب عليك أن تختار نصف الاسئلة على الأقل ");
            for (let i=0;i<All_choose_mob.length;i++)
            {
              if (i===All_choose_mob.length-4 || i===All_choose_mob.length-3 || i===All_choose_mob.length-2 ||  i===All_choose_mob.length-1)
              {
                continue;
              }
                All_choose_mob[i].style.border="1px solid #000DFF";
                console.log(All_choose_mob[i])
            }
        }

    }







    // ------------------------------------------
   

  
var testim = document.getElementById("testim"),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    Side_item_content=document.querySelectorAll(".square"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimContent.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            $(testimContent[k]).hide();
            $(Side_item_content[k]).removeClass("active-square");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
         if (slide===testimContent.length-1)
            {
             
              document.querySelector(".finish-mob").style.display="flex";
           
              document.querySelector(".question-after").style.display="none"


            }
            else
            {
              document.querySelector(".finish-mob").style.display="none";
              document.querySelector(".question-after").style.display="flex"
             
            }

            if(slide===0)
            {
              document.querySelector(".question-before").style.visibility="hidden";
              document.querySelector(".question-before").style.opacity="0";
            }
            else
            {
               document.querySelector(".question-before").style.visibility="visible";
               document.querySelector(".question-before").style.opacity="1";
            }
        testimContent[slide].classList.add("active");
        $(testimContent[slide]).show();
        $(Side_item_content[slide]).addClass("active-square");
        

        currentActive = currentSlide;

    }
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
        window.scroll(0,0);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
        window.scroll(0,0);
    })

    playSlide(currentSlide);

}


let count_Hint=0;

document.querySelector(".side-left-head-img").onclick=function()
{
  count_Hint++;
  document.querySelector(".Responsive-lab").style.display="none";
  document.querySelector(".Hints").style.display="block";
  document.querySelector(".body").style.backgroundColor="white"
}
document.querySelector(".head-item2-mob").onclick=function()
{
  document.querySelector(".Responsive-mob").style.display="none";
  document.querySelector(".Hints").style.display="block";
}
document.querySelector(".Hints-part1-item2").onclick=function()
{
  if(count_Hint===0)
  {
  document.querySelector(".Responsive-mob").style.display="block";
  document.querySelector(".Hints").style.display="none";
  count_Hint=0;
  }
  else
  {
    document.querySelector(".Responsive-lab").style.display="block";
    document.querySelector(".Hints").style.display="none";
    document.querySelector(".body").style.backgroundColor="#000DFF"
  }

}

