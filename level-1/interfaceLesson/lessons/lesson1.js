// let score=0;
// document.querySelector(".confirm").onclick=function(e)
// {
//     score=0
//      if (document.getElementById("correct1").checked)
//     {
//         score++
//     }
//     if (document.getElementById("correct2").checked)
//     {
//         score++
//     }

//    if (score<2)
//    {
//     alert ("no")
//     document.querySelector(".confirm").innerHTML="تحقق من إجاباتك ";
//     document.querySelector(".question1 .choose-item-content").style.border="4px solid green"
//    }
//    else
//    {
//     document.querySelector(".confirm").innerHTML=" "
//     document.querySelector(".confirm").innerHTML=" التالي ";
//    }
// }

document.querySelector(".display-solve-js").onclick=function()
{
    document.querySelector(".main-The-Solve").style.display="none";
    document.querySelector(".show").style.display="block";
}
document.querySelector(".show ").onclick=function()
{
    document.querySelector(".main-The-Solve").style.display="block";
    document.querySelector(".display-solve-js").style.display="block";
    document.querySelector(".show").style.display="none";

}
 let c=[];
  let score=0,lost=0,countLessons=0,sum=0,numberQuestion=0;
  let x=0,countFather=0,count_notFather=0,y=1;
  let All_choose=document.querySelectorAll(".choose-item-content")
    document.querySelector(".confirm").onclick=function(e)
    {
         x=0,countFather=0,count_notFather=0,y=1;
        score=0,lost=0,countLessons=0,sum=0,numberQuestion=0;
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
                y++
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
                    // document.querySelector(`.not-father${count_notFather}`).style.backgroundColor="#E71D36"
                    document.querySelector(`.not-father${count_notFather}`).style.border="4px solid #E71D36"
                }
            }
        }

        sum=score+lost;
        if (sum<numberQuestion)
        {
            alert("الرجاء حل الاختبار المفاجئ ")
            for (let i=0;i<All_choose.length;i++)
            {
                All_choose[i].style.border="1px solid #000DFF"
            }
        }
        else
        {
            for (let i=1;i<=y;i++)
        {
            document.querySelector(".father"+i).style.border="4px solid #78C04C"
        }
        }
    
    }

    document.querySelector(".after-lesson").addEventListener("click",function(event) 
     {
        if (score===0 && lost===0)
        {
            alert("الرجاء حل الاختبار المفاجئ قبل الانتقال للتدريب")
            event.preventDefault()
        }
        else
        {
            location.href="../All_Activities/activity1.html"
        }
    })



     
    

     
