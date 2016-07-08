;$(function(){
	
	var selector;
 
    	$("#jin").click(function(){
	    	
	    	modal('modal1');
        	    	
        	});
        	
        $("#vodka").click(function(){
	        
	        modal('modal2')
	        
        });
        
        $("#kalu").click(function(){
	        
	        modal('modal3')
	        
        });
       
        $("#milk").click(function(){
	        
	        modal('modal1')
	        
        });

		 $("#orange").click(function(){
	        
	        modal('modal2')
	        
        });

		$("#soda").click(function(){
	        
	        modal('modal2')
	        
        });

        
        function modal(selector){
        	    	
			$("body").append('<div id="modal-bg"></div>');
 
				modalResize();
 
				$('#modal-bg' + ',' + '#' + selector).fadeIn("slow");
			
				$('#modal-bg' + ',' + '#' + selector).click(function(){
					$('#' + selector + ',' + '#modal-bg').fadeOut("slow",function(){
            
						$('#modal-bg').remove();
            
            		});
				});
 
			$(window).resize(modalResize);
			function modalResize(){
 
            	var w = $(window).width();
				var h = $(window).height();
 
				var cw = $('#' + selector).outerWidth();
				var ch = $('#' + selector).outerHeight();
 
				$('#' + selector).css({
                	"left": ((w - cw)/2) + "px",
					"top": ((h - ch)/2) + "px"
            	});
        	}
      	}

	});

	