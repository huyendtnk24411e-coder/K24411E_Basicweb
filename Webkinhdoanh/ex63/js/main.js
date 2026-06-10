function load_data()
{
    load_date()
    load_members()
}

function load_date()
{
    day=document.getElementById("day")
    month=document.getElementById("month")
    year=document.getElementById("year")

    for(i=1;i<=31;i++)
    {
        option=document.createElement("option")

        if(i<10)
        {
            option.text="0"+i
            option.value="0"+i
        }
        else
        {
            option.text=i
            option.value=i
        }

        day.appendChild(option)
    }

    for(i=1;i<=12;i++)
    {
        option=document.createElement("option")
        option.text=i
        option.value=i
        month.appendChild(option)
    }

    for(i=1970;i<=2005;i++)
    {
        option=document.createElement("option")
        option.text=i
        option.value=i
        year.appendChild(option)
    }
}

function load_members()
{
    for(i=0;i<members.length;i++)
    {
        add_row(
            members[i].name,
            members[i].email,
            members[i].gender,
            members[i].birthday,
            members[i].hobbies,
            members[i].color
        )
    }
}

function sign_up()
{
    name=myform.name.value
    email=myform.email.value

    if(name=="")
    {
        alert("Name can not be left blank")
        myform.name.focus()
        return
    }

    if(email.indexOf("@")==-1)
    {
        alert("Email must be valid")
        myform.email.focus()
        return
    }

    birthday=myform.day.value+"/"+myform.month.value+"/"+myform.year.value

    gender=""
    for(i=0;i<myform.gender.length;i++)
    {
        if(myform.gender[i].checked)
            gender=myform.gender[i].value
    }

    hobbies=""
    for(i=0;i<myform.hobby.length;i++)
    {
        if(myform.hobby[i].checked)
            hobbies=hobbies+myform.hobby[i].value+" "
    }

    color=""
    for(i=0;i<myform.color.length;i++)
    {
        if(myform.color[i].checked)
            color=myform.color[i].value
    }

    add_row(name,email,gender,birthday,hobbies,color)
}

function add_row(name,email,gender,birthday,hobbies,color)
{
    tbody=document.getElementById("memberbody")

    tr=document.createElement("tr")

    td_name=document.createElement("td")
    td_email=document.createElement("td")
    td_gender=document.createElement("td")
    td_birthday=document.createElement("td")
    td_hobbies=document.createElement("td")
    td_color=document.createElement("td")

    td_name.innerHTML=name
    td_email.innerHTML=email
    td_gender.innerHTML=gender
    td_birthday.innerHTML=birthday
    td_hobbies.innerHTML=hobbies
    td_color.innerHTML=color

    tr.appendChild(td_name)
    tr.appendChild(td_email)
    tr.appendChild(td_gender)
    tr.appendChild(td_birthday)
    tr.appendChild(td_hobbies)
    tr.appendChild(td_color)

    tr.setAttribute("onmouseover","this.style.backgroundColor='yellow'")
    tr.setAttribute("onmouseout","this.style.backgroundColor='white'")

    tbody.appendChild(tr)
}