function load_products(products,productbody)
{
    for(var i=0;i<products.length;i++)
    {
        product=products[i]
        productId=product.id
        productName=product.name

        tr=document.createElement("tr")

        td_id=document.createElement("td")
        td_name=document.createElement("td")
        td_img=document.createElement("td")

        img=document.createElement("img")
        img.setAttribute("src","images/delete.png")
        img.setAttribute("onclick","delete_product(this)")

        td_id.innerHTML=productId
        td_name.innerHTML=productName
        td_img.appendChild(img)

        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_img)

        productbody.appendChild(tr)
    }
}

function processSaveProduct()
{
    productId=document.getElementById("productId").value
    productName=document.getElementById("productName").value
    productbody=document.getElementById("productbody")

    tr=document.createElement("tr")

    td_id=document.createElement("td")
    td_name=document.createElement("td")
    td_img=document.createElement("td")

    img=document.createElement("img")
    img.setAttribute("src","images/delete.png")
    img.setAttribute("onclick","delete_product(this)")

    td_id.innerHTML=productId
    td_name.innerHTML=productName
    td_img.appendChild(img)

    tr.appendChild(td_id)
    tr.appendChild(td_name)
    tr.appendChild(td_img)

    productbody.appendChild(tr)
}

function delete_product(img_element)
{
  event.stopPropagation();
  if(confirm('Are you sure you want to delete this row?'))
{
    }
{
    img_element.parentElement.parentElement.remove()
}
}