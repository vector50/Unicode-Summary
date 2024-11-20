
function overrideHLJS()
{
    const codeTags = document.getElementsByTagName("code");
    
    for (let i = 0; i < codeTags.length; i++)
    {
        codeTags[i].style.width = "85%";
        codeTags[i].style.paddingRight = "5%";
        codeTags[i].style.border = "1px solid aqua";
        codeTags[i].style.borderRadius = "5px";
        codeTags[i].innerHTML = codeTags[i].innerHTML.trim();
        codeTags[i].style.overflowX = "auto";
    }
}

function copyURL(URIFragmentName)
{
    navigator.clipboard.writeText(window.location.href.split('#')[0] + "#" + URIFragmentName);
}
