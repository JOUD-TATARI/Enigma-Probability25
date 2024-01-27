
  let c=[];
  let score=0,lost=0,countLessons=0,sum=0,numberQuestion;
  let x=0,countFather=0,count_notFather=0,y=1;
  let AllTd_not;
  let All_choose=document.querySelectorAll(".choose-item-content")
    document.querySelector(".confirm").onclick=function()
    { 
         score=0,lost=0,countLessons=0,numberQuestion=0;
        x=0,countFather=0,count_notFather=0,y=1,sum=0;
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
                    console.log("not"+count_notFather)
                    // document.querySelector(`.not-father${count_notFather}`).style.backgroundColor="#E71D36"
                    if (count_notFather===4 || count_notFather===5 || count_notFather===6)
                    {
                         AllTd_not=document.querySelectorAll(`.not-father${count_notFather} table td`)
                        console.log(AllTd_not)
                        for (let k=0;k<AllTd_not.length;k++)
                        {
                            AllTd_not[k].style.border="4px solid #E71D36"
                        }
                    }
                    else{
                    document.querySelector(`.not-father${count_notFather}`).style.border="4px solid #E71D36"
                    }
                }
            }
        }

        

        sum=score+lost;
         if (sum<numberQuestion)
        {
            console.log(sum)
            console.log(numberQuestion)
            alert("الرجاء حل الاختبار المفاجئ ")
            for (let i=0;i<All_choose.length;i++)
            {
                if (i===4 || i===5 ||i===6 || i===7)
                {
                    for (let k=0;k<AllTd_not.length;k++)
                        {
                            AllTd_not[k].style.border="2px solid #000DFF"
                        }
                }
                else
                {
                All_choose[i].style.border="1px solid #000DFF"
                }
            }

        }
        else
        {
            let AllTd=document.querySelectorAll(".father2 table td")
            for (let i=1;i<=y;i++)
        {

            if (i===2)
            {
                console.log(AllTd);
                for(let i=0;i<AllTd.length;i++){
                // AllTd.style.backgroundColor="green";
                AllTd[i].style.border="4px solid #78C04C";
                }
                
            }
            else
            {
            document.querySelector(".father"+i).style.border="4px solid #78C04C"
            }
        }
        }
    
    }


    document.querySelector(".after-lesson").addEventListener("click",function(event) 
     {
        if (score===0 && lost===0)
        {
            alert("الرجاء حل الاختبار المفاجئ قبل الانتقال للتدريب ")
            event.preventDefault()
        }
        else
        {
            location.href="../All_Activities/activity5.html"
        }
    })




     
    

     
