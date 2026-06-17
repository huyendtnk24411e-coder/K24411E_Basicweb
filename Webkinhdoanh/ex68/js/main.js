function loadCDCollection()
{
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "cd_catalog.xml", true);

    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var xmlDoc = xhr.responseXML;

            var cds = xmlDoc.getElementsByTagName("CD");

            var body = document.getElementById("bodycd");

            body.innerHTML = "";

            for(let i=0;i<cds.length;i++)
            {
                let artist =
                cds[i].getElementsByTagName("ARTIST")[0]
                .childNodes[0].nodeValue;

                let title =
                cds[i].getElementsByTagName("TITLE")[0]
                .childNodes[0].nodeValue;

                let tr = document.createElement("tr");

                let tdArtist = document.createElement("td");
                let tdTitle = document.createElement("td");

                tdArtist.innerHTML = artist;
                tdTitle.innerHTML = title;

                tr.appendChild(tdArtist);
                tr.appendChild(tdTitle);

                body.appendChild(tr);
            }
        }
    }
}