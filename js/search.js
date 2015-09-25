		$(document).ready(function()
		{
			$("#search_box").keyup(
				function()
				{
			// alert('test');

					var search_string = $("#search_box").val();
					if(search_string == '')
					{
						$("#searchres").html('');
					}
					else
					{
					// alert(search_string);
						
						$.ajax(
						{
							type: "GET",
							url: "/openemr/api/patients/search/" + search_string,						
							success: function(response)
							{
								console.log(response);
								var output = ""; var out = "";
								$.each(response.patient , function(key , value){ 								    
								      console.log(value.username);      
					          		
								var fName = getName(value.fname);
								var name = value.lname + ', ' + fName;					      

								out += '<a href="/openemr/searchbox/search.html#/' + value.id + '" onclick="fillme(\''+name+'\');">'
									+ '<div class="user_div">'
									//+ '<img src="imgs/1.png" style="border-radius:5px;float:left;">'
									+ '<div class="name">'+ name + '</div><br>'
									+ '<div class="cntry">'
									//+ value.username 
									+ '</div>'
									+ '</div>'
									+ '</a>';
								
								$("#searchres").html(out);	
								});					            
							},
							dataType: "json"
						});
					}
				});
		});
		function fillme(name){
			$("#search_box").val(name);
			$("#searchres").html('');
		}
function getName(val)
{
	if(val){
		return val
	}
	else {
			return "{no firstname}";
		}
}