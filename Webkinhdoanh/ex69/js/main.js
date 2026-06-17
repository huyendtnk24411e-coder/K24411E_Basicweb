let xmlDoc;

function loadTitles() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "datasets/employees.xml", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            xmlDoc = xhr.responseXML;

            let employees = xmlDoc.getElementsByTagName("employee");
            let ddl = document.getElementById("ddlTitle");

            ddl.innerHTML = "";

            let titles = [];

            for (let i = 0; i < employees.length; i++) {

                let title = employees[i].getAttribute("title");

                if (!titles.includes(title)) {
                    titles.push(title);

                    let option = document.createElement("option");
                    option.value = title;
                    option.text = title;

                    ddl.appendChild(option);
                }
            }

            showEmployees();
        }
    };
}

function showEmployees() {

    let selectedTitle =
        document.getElementById("ddlTitle").value;

    let employees =
        xmlDoc.getElementsByTagName("employee");

    let body =
        document.getElementById("bodyEmployee");

    body.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {

        let title =
            employees[i].getAttribute("title");

        if (title == selectedTitle) {

            let id =
                employees[i].getAttribute("id");

            let name =
                employees[i]
                    .getElementsByTagName("name")[0]
                    .textContent;

            let phone =
                employees[i]
                    .getElementsByTagName("phone")[0]
                    .textContent;

            let tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${id}</td>
                <td>${name}</td>
                <td>${phone}</td>
            `;

            body.appendChild(tr);
        }
    }
}