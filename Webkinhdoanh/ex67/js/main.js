function load_students(student_xml_text, bodyStudent)
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(student_xml_text, "text/xml");
    var students = xmlDoc.getElementsByTagName("student");
    for(var i = 0; i < students.length; i++)
    {
        var id =
        students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        var name = students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var birthday = students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue;
        var gender = students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue;
        var row = document.createElement("tr");
        row.innerHTML =
        "<td>" + id + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + birthday + "</td>" +
        "<td>" + gender + "</td>";
        row.onclick = function(studentId, studentName, studentBirthday, studentGender)
        {
            return function()
            {
                document.getElementById("sid").innerHTML = studentId;
                document.getElementById("sname").innerHTML = studentName;
                document.getElementById("sbirthday").innerHTML = studentBirthday;
                document.getElementById("sgender").innerHTML = studentGender;
            }
        }(id, name, birthday, gender);
        bodyStudent.appendChild(row);
    }
}