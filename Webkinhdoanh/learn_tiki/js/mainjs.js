function load_categoy_fromjson(dataset_path, bodycustomer)
{
    for(let i = 0; i < categories.length; i++)
    {
        let tr = document.createElement("tr");

        let td_name = document.createElement("td");
        td_name.innerHTML = categories[i].name;

        let td_image = document.createElement("td");
        td_image.innerHTML =
            "<img src='" +
            categories[i].image +
            "' width='100'>";

        tr.appendChild(td_name);
        tr.appendChild(td_image);

        bodycustomer.appendChild(tr);
    }
}
function load_categoy_fromxml(dataset_path, bodycustomer)
{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", dataset_path, true);
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var xmlDoc = xhr.responseXML;

            if (xmlDoc == null)
            {
                alert("Lỗi XML");
                return;
            }

            var tag_categories =
                xmlDoc.getElementsByTagName("category");

            for (let i = 0; i < tag_categories.length; i++)
            {
                let value_tag_image =
                    tag_categories[i]
                    .getElementsByTagName("image")[0]
                    .childNodes[0].nodeValue;

                let value_tag_name =
                    tag_categories[i]
                    .getElementsByTagName("name")[0]
                    .childNodes[0].nodeValue;

                let tr = document.createElement("tr");

                let td_name =
                    document.createElement("td");
                td_name.innerHTML = value_tag_name;

                let td_image =
                    document.createElement("td");

                td_image.innerHTML =
                    "<img src='" +
                    value_tag_image +
                    "' width='100'>";

                tr.appendChild(td_name);
                tr.appendChild(td_image);

                bodycustomer.appendChild(tr);
            }
        }
    }
}