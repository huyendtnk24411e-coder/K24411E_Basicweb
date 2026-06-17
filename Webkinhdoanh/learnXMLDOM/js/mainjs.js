/**
 * customers list of customer (XML->customer.js)
 * bodycustomer->tbody
 * @param {*} customers_xml_text 
 * @param {*} bodycustomer 
 */
function load_customers(customers_xml_text,bodycustomer) 
{
    var parser = new DOMParser(); 
    var xmlDoc = parser.parseFromString(customers_xml_text,"text/xml"); 
    //đọc toàn bộ thẻ customer
    tag_customer = xmlDoc.getElementsByTagName("customer");
    for (i = 0; i < tag_customer.length; i++){
        tag_id=tag_customer[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        tag_name=tag_customer[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        tag_age=tag_customer[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
        tag_city=tag_customer[i].getElementsByTagName("city")[0].childNodes[0].nodeValue;
        tr=document.createElement("tr");
        td_id=document.createElement("td");
        td_id.innerHTML=tag_id;
        td_name=document.createElement("td");
        td_name.innerHTML=tag_name;
        td_age=document.createElement("td");
        td_age.innerHTML=tag_age;
        td_city=document.createElement("td");
        td_city.innerHTML=tag_city;
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_age);
        tr.appendChild(td_city);
        bodycustomer.appendChild(tr);
    }
}