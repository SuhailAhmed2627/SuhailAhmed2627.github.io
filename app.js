function message()
{
    var x = document.forms["message"]["name"].value;

    switch (x)
    {
        case "lubna":
            alert("I Love You");
            return false;
        default:
            alert("Name must be filled out")
            return false;
    }
}