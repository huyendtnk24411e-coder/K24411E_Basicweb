function load_students(student_xml_text, bodyStudent)
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(student_xml_text,"text/xml");

    var tag_student = xmlDoc.getElementsByTagName("student");

    for(let i=0;i<tag_student.length;i++)
    {
        let id =
        tag_student[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

        let name =
        tag_student[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        let birthday =
        tag_student[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue;

        let gender =
        tag_student[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue;

        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${birthday}</td>
            <td>${gender}</td>
        `;

        tr.onclick = function(){
            document.getElementById("sid").innerHTML = id;
            document.getElementById("sname").innerHTML = name;
            document.getElementById("sbirthday").innerHTML = birthday;
            document.getElementById("sgender").innerHTML = gender;
        }

        bodyStudent.appendChild(tr);
    }
}