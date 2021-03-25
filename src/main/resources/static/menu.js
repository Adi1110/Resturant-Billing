var total = 0;
var tot = 0;
    $(document).ready(function() {
 
        $("input[type='button']").click(function(){
            var radio1 = $("input[name='pos']:checked").val();
            var radio2 = $("input[name='ind']:checked").val();
            var price = null;
            if(radio1 == "Roll")
            {
                if(radio2 == "veg")
                {
                    price = 12;
 
                }
                else if(radio2 == "fish")
                {
 
                    price = 15;
                }
                else if(radio2 == "chicken")
                {
 
                    price = 30;
 
                }
 
            }
            else if(radio1 == "Bun")
            {
                if(radio2 == "veg")
                {
                    price = 30;
 
                }
                else if(radio2 == "fish")
                {
 
                    price = 35;
                }
                else if(radio2 == "chicken")
                {
 
                    price = 40;
 
                }
 
            }
            else if(radio1 == "Puff")
            {
                if(radio2 == "veg")
                {
                    price = 40;
 
                }
                else if(radio2 == "fish")
                {
 
                    price = 45;
                }
                else if(radio2 == "chicken")
                {
 
                    price = 50;
 
                }
 
            }
            else if(radio1 == "pizza")
            {
                if(radio2 == "veg")
                {
                    price = 160;
 
                }
                else if(radio2 == "fish")
                {
 
                    price = 180;
                }
                else if(radio2 == "chicken")
                {
 
                    price = 170;
 
                }
            }   
            else if(radio1 == "pasta")
            {
                if(radio2 == "veg")
                {
                    price = 160;
 
                }
                else if(radio2 == "fish")
                {
 
                    price = 180;
                }
                else if(radio2 == "chicken")
                {
 
                    price = 170;
 
                }
 
            }
            var qty = $('#qty').val();
            tot = qty * price;
 
            var table1 =
 
             "<tr>" +
 
                 
                  "<td>" + radio1  + " " + radio2 +  "</td>" +
                  "<td>" +  qty +  "</td>" +
                  "<td>" +  price +  "</td>" +
                  "<td>" +  tot +  "</td>" +
                  "<td><button type='button' name='record' class='btn btn-warning' onclick='deleterow(this)'>Delete </td>" 
             "</tr>" ;
                total += Number(tot);
                $('#total').val(total);
            $("table tbody").append(table1);
        });
 
    });
 
    function deleterow(e)
    {
        total_cost = parseInt($(e).parent().parent().find('td:last').text(),10);
        total -= total_cost;
        $('#total').val(total);
        $(e).parent().parent().remove();
    }
    $('#reset').click(function()
 
        {
            location.reload();
 
        }
    );