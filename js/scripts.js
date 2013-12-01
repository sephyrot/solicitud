$(function() {

	$(document).bind('drop dragover', function (e) {
    	e.preventDefault();
	});

	//$('#upload').fileupload();

	$('#fileupload').fileupload({

		url: '/solicitud/upload.php',

  // This function is called when a file is added to the queue
	  add: function (e, data) {
	    
	    //This area will contain file list and progress information.
	    
	    // var tpl = $('<li class="working">'+
	    //             '<input type="text" value="0" data-width="48" data-height="48" data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" />'+
	    //             '<p></p><span></span></li>' );

		var tpl = $('<tr><td>1</td><td>'+data.files[0].name+'</td><td>01/04/2012</td><td>Default</td></tr>' );


	    // Append the file name and file size
	    // tpl.find('p').text(data.files[0].name)
	    //              .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

	    // Add the HTML to the UL element
	    data.context = tpl.appendTo($(".lista"));

	    // Automatically upload the file once it is added to the queue
	    var jqXHR = data.submit();
	  },
	  sequentialUploads: true,

	  done: function (e,data) {
	  		setTimeout(function() {
		        $('#progress .progress-bar').css('width',0);
		    }, 1500);
            
        },

	  progress: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
        	);
            
        }
	});

	



	//Helper function for calculation of progress
	function formatFileSize(bytes) {
	    if (typeof bytes !== 'number') {
	        return '';
	    }

	    if (bytes >= 1000000000) {
	        return (bytes / 1000000000).toFixed(2) + ' GB';
	    }

	    if (bytes >= 1000000) {
	        return (bytes / 1000000).toFixed(2) + ' MB';
	    }
	    return (bytes / 1000).toFixed(2) + ' KB';
	}

});