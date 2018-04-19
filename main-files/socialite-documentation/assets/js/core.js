// src/js/core.js


$(function(){

	$('.has-submenu a').on('click',function(e){
		e.preventDefault();
		$(this).parent().find('ul').slideToggle();
	});

    $('.btn-up').on('click',function(){
        $(this).parent().find('.btn-counter').text(parseInt($(this).parent().find('.btn-counter').text())+1);
    });

    $('.btn-down').on('click',function(){
        $(this).parent().find('.btn-counter').text(parseInt($(this).parent().find('.btn-counter').text()) > 0 ? parseInt($(this).parent().find('.btn-counter').text())-1 : 0);
    });
     $('.datepicker').on('click',function(){
        $(this).datepicker({
            format: 'M dd, yy',
        });
      });
    $('.btn-group-justified .btn-grp').on('click',function(e){
    	e.preventDefault();	
    	$('.btn-group-justified .btn-grp').removeClass('active');
        $(this).addClass('active');
    });
    $('.rotate .potrait').on('click',function(e){
        e.preventDefault(); 
        $('.rotate .potrait').removeClass('active');
        $(this).addClass('active');
    });
    $('.activities-list li').on('click',function(e){
        e.preventDefault(); 
        $('.activities-list li').removeClass('active');
        $(this).addClass('active');
    });

    $('.report-section li').on('click',function(e){
        e.preventDefault(); 
        $('.report-section li').removeClass('active');
        $(this).addClass('active');
    });
    
	$('#activityprofileModal').modal('show');
    

    	$(function () {

        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker();
        $('#datetimepicker8').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });

    });

        $('#chart').donut();
         $('#char').donut();
         
         //slider-in Image-detail pge
        $('.nstSlider').nstSlider({
    	    "left_grip_selector": ".leftGrip",
    	    "value_changed_callback": function(cause, leftValue, rightValue) {
    	        $(this).parent().find('.leftLabel').text(leftValue);
    	    	}
	   });

        var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                                  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

        var formatName = function(item) {
            return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
        };

        jQuery('.numbersOnly').keyup(function () { 
            this.value = this.value.replace(/[^0-9\.]/g,'');
        });

        //tagging
        $('#input-tags').selectize({
            delimiter: ',',
            persist: false,
            create: function(input) {
                return {
                    value: input,
                    text: input
                }
            }
        });

       // selectize for emails

        $('#select-to').selectize({
            persist: false,
            maxItems: null,
            valueField: 'email',
            labelField: 'name',
            searchField: ['first_name', 'last_name', 'email'],
            sortField: [
                {field: 'first_name', direction: 'asc'},
                {field: 'last_name', direction: 'asc'}
            ],
            
            render: {
                item: function(item, escape) {
                    var name = formatName(item);
                    return '<div>' +
                        (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                        (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                    '</div>';
                },
                option: function(item, escape) {
                    var name = formatName(item);
                    var label = name || item.email;
                    var caption = name ? item.email : false;
                    return '<div>' +
                        '<span class="label">' + escape(label) + '</span>' +
                        (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                    '</div>';
                }
            },

            createFilter: function(input) {
                var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
                var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
                return regexpA.test(input) || regexpB.test(input);
            },
            create: function(input) {
                if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                    return {email: input};
                }
                var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
                if (match) {
                    var name       = $.trim(match[1]);
                    var pos_space  = name.indexOf(' ');
                    var first_name = name.substring(0, pos_space);
                    var last_name  = name.substring(pos_space + 1);

                    return {
                        email: match[2],
                        first_name: first_name,
                        last_name: last_name
                    };
                }
                
                return false;
            }
        });
        
        $(document).ready(function () {
            //WYSIWYG EDITOR(TinyMCE)
            tinymce.init({
            selector: '.mytextarea',
            theme: 'modern',
            height : 84,
            max_width: 884.25,
            plugins: [
              'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
              'searchreplace wordcount visualblocks visualchars  code fullscreen insertdatetime media nonbreaking',
              'save table contextmenu directionality emoticons template paste textcolor'
            ],
            toolbar: 'bold italic underline strikethrough | link blockquote image code | bullist  numlist alignjustify aligncenter alignleft alignright', 
            menubar: false,
            statusbar: false,
            resize: false,

            });    

            //date-picker
            $('#example1').datepicker({
                format: "dd/mm/yyyy"
            });  

            //caret rotation in invoice-list
            $('.invoice-panel .btn-collapsable').on("click",function(){
                if($(this).find('.caret-rotate').hasClass('fa-caret-down')) {
                    $(this).find('.caret-rotate').removeClass('fa-caret-down').addClass('fa-caret-up');
                }
                else{
                    $(this).find('.caret-rotate').removeClass('fa-caret-up').addClass('fa-caret-down');
                }
            });
            
            // //for count increment in forum page
            //  $(function(){

            //     var z = $('#btn-middle1').text();
            //     $('.btn-inc').on("click",function(){
            //         z++;
            //         $(this).parent().find('#btn-middle1').text(z);
            //     }) ;
            //     $('.btn-dec').on("click",function(){
            //         if(z <= 0){
            //             $(this).parent().find('#btn-middle1').text(0);
            //         }
            //         else
            //         {    
            //              z--;
            //             $(this).parent().find('#btn-middle1').text(z);
            //         }
            //     });
            //  }) ;

            //   $(function(){

            //     var z = $('#btn-middle2').text();
            //     $('.btn-inc').on("click",function(){
            //         z++;
            //         $(this).parent().find('#btn-middle2').text(z);
            //     }) ;
            //     $('.btn-dec').on("click",function(){
            //         if(z <= 0){
            //             $(this).parent().find('#btn-middle2').text(0);
            //         }
            //         else
            //         {    
            //              z--;
            //             $(this).parent().find('#btn-middle2').text(z);
            //         }
            //     });
            //  }) ;

             // For Show and hide the password
                function showPassword() {
                    var target = $("#showHide");
                    target.click(function() {
                        if ($("#password").attr("type")==="password") {
                            $("#password").attr("type", "text");
                            $('#showHide .fa').removeClass('fa-eye').addClass('fa-eye-slash');
                        } else {
                            $("#password").attr("type", "password");
                           $('#showHide .fa').addClass('fa-eye').removeClass('fa-eye-slash');
                        }
                    });
                }
                $(document).ready(function () {
                    "use strict";
                    showPassword();
                });


            //pagination
            // $(function() {
            //     $('.fa-caret-right').pagination('nextPage');
            // });

            //tool-tip for widget-card

            $('[data-toggle="tooltip"]').tooltip();
            //$('[data-toggle="tooltip"]').tooltip('show');

            //upload image
            $("#upfile1").click(function(e) {
                e.preventDefault();
                $("#file1").trigger('click');
            });
            
            $("#upfile2").click(function(e) {
                e.preventDefault();
                $("#file2").trigger('click');
            });
           

            // //upload file 
            // $("#get_file").on("click",function(e){
            //     e.preventDefault();
            //     $("#my_file").trigger('click');
            // });

            // //upload project
            // $("#get_project").on("click",function(e){
            //     e.preventDefault();
            //     $("#my_project").trigger('click');
            // });

        });
        
        //full  calendar js

        $(document).ready(function() {

            

            // page is now ready, initialize the calendar...

            $('#calendar').fullCalendar({
                // put your options and callbacks here
                customButtons: {
                // myCustomButton: {
                //     text: 'custom!',
                //     click: function() {
                //         // alert('clicked the custom button!');
                //     }
                // }
                },
                header: {
                    left: 'prev,next myCustomButton',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },

                 eventLimit: true, // for all non-agenda views
                 views: {
                    agenda: {
                        eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
                    }
                },

                droppable: true,
                // drop: function(date) {
                //     alert("Dropped on " + date.format());
                // },

                // drop: function(date) { // this function is called when something is dropped
            
                //     // retrieve the dropped element's stored Event Object
                //     var originalEventObject = $(this).data('eventObject');
                    
                //     // we need to copy it, so that multiple events don't have a reference to the same object
                //     var copiedEventObject = $.extend({}, originalEventObject);
                    
                //     // assign it the date that was reported
                //     copiedEventObject.start = date;
                    
                // }



                // dayClick: function() {
                //     alert('a day has been clicked!');
                // },

                defaultView: 'agendaDay',
                editable:true,
                events: [
                    {
                        title  : 'Sara Birthday',
                        color : 'rgba(255, 120, 0, 0.1)',
                        start  : '2016-07-18'
                    },
                    {
                        title  : 'Click for getbootstrap',
                        start  : '2016-07-15',
                        textColor: '#354052',
                        color : 'rgba(38, 154, 243, 0.1)',
                        url    :  'http://getbootstrap.com' 
                    },
                    {
                        title  : 'Jane Birthday',
                        start  : '2016-08-05',
                        end    : '2016-08-07',
                         resources: [
                            { id: 'a', title: 'Room A' },
                            { id: 'b', title: 'Room B' },
                            { id: 'c', title: 'Room C' },
                            { id: 'd', title: 'Room D' }
                        ],
                    },
                    {
                        title  : 'Steve',
                        start  : '2016-07-2'
                    },
                    {
                        title  : 'Jane Appointment',
                        start  : '2016-10-05',
                        color : 'rgba(255, 120, 0, 0.1)',
                        end    : '2016-10-07'
                    },
                    {
                        title  : 'Carl',
                        start  : '2016-07-26'
                    },
                    {
                        title  : 'Maxx',
                        color : 'rgba(255, 120, 0, 0.1)',
                        start  : '2016-08-1'
                        
                    },
                    {
                        title  : 'Lisa',
                        start  : '2016-08-27 10:30:00',
                        end  : '2016-08-27 12:30:00',
                        color : 'rgba(255, 120, 0, 0.1)',
                        allDay : false // will make the time show
                    },
                    {
                        title  : 'Geetha',
                        start  : '2016-08-29 10:30:00',
                        description : 'This is a cool event'
                        
                    }
                ],
                
            });

            // * Initialize the external events

            $('#external-events .external-event').draggable({
                revert: false,      // immediately snap back to original position
                revertDuration: 0  //
            });


        });


        $(document).ready(function () {
          //called when key is pressed in textbox
          $(".numbersOnly").keypress(function (e) {
             //if the letter is not digit then display error and don't type anything
             if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
                //display error message
                
                       return false;
            }
           });
        });

        $(document).ready(function() {
            $('#select_all').click(function() {  //on click 
                if(this.checked) { // check select status
                    $('.checkbox1').each(function() { //loop through each checkbox
                        this.checked = true;  //select all checkboxes with class "checkbox1"               
                    });
                }else{
                    $('.checkbox1').each(function() { //loop through each checkbox
                        this.checked = false; //deselect all checkboxes with class "checkbox1"                       
                    });         
                }
            });
           

            $('#check_all').click(function() {  //on click 
                if(this.checked) { // check select status
                    $('.check-box1').each(function() { //loop through each checkbox
                        this.checked = true;  //select all checkboxes with class "checkbox1"               
                    });
                }else{
                    $('.check-box1').each(function() { //loop through each checkbox
                        this.checked = false; //deselect all checkboxes with class "checkbox1"                       
                    });         
                }
            });

            $('.team-members-table tr').click(function(event) {
                if (event.target.type !== 'checkbox') {
                    $(':checkbox', this).trigger('click');
                }
            });

            
        });

        $(document).ready(function(){
            $("#avatar").click(function(e) {
                 e.preventDefault();
                $("#avatar-input").trigger('click');
            });

            if($('.calendar-switch').children('.cmn-toggle-round').is(':checked'))
            {
                $(this).parents('.note-checked').find(".vivek").addClass("blur");
                $(this).parents('.note-checked').find(".vivek").removeClass("highlight");
            }
            else
            {
               $(this).parents('.note-checked').find(".vivek").addClass("highlight");
               $(this).parents('.note-checked').find(".vivek").removeClass("blur");

            }
            $('.calendar-switch ').on('click',function(){
                if($(this).children('.cmn-toggle-round').is(':checked'))
                {
                    $(this).parents('.note-checked').find(".vivek").addClass("highlight");
                    $(this).parents('.note-checked').find(".vivek").removeClass("blur");
                }
                else
                {
                   $(this).parents('.note-checked').find(".vivek").addClass("blur");
                   $(this).parents('.note-checked').find(".vivek").removeClass("highlight");
                }
            });




            // //calendar
            // $("#jqxcalendar").jqxCalendar({ width: '300px', height: '250px' });
            //   $('#jqxcalendar').bind('valuechanged', function (event) {
            //       var date = event.args.date;
            //       $("#log").text(date.toDateString());
            //   });


            // $('.color-shape').mouseover(function(){
            //     var x = $(this).css('background-color');
            //     $(this).parents('.color-picker').find('.form-control').val(rgb2hex(x));
            //     $(this).parents('.color-picker').find('.color-box').css("background-color",x);
            //     $(this).parents('.left-sidebar').css("background",x);
            //     //$("body").css('background',x);
            //     // alert(x);
            // });
            var hover_color = function () {
               var x = $(this).css('background-color');
                $(this).closest('.color-picker').find('.form-control').val(rgb2hex(x));
                $(this).closest('.color-picker').find('.color-box').css("background-color",x);
                //$("body").css('background',x);
                // alert(x);
            };
            $('.color-shape').click(function(){
                var x = $(this).css('background-color');
                $(this).closest('.left-sidebar').css("background",x);
            }).hover(hover_color);                

            var hexDigits = new Array
            ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

            //Function to convert hex format to a rgb color
            function rgb2hex(rgb) {
             rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
             return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
            }

            function hex(x) {
              return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
             }


             $(".text-bold").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-dark");
                
             });
             $(".text-italic").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("italic");
             });
             $(".text-caps").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-uppercase"); 
                if($('.result-text').hasClass('text-lowercase'))
                {
                    $(this).closest('.font-picker').find('.result-text').removeClass("text-lowercase");
                }
             });
             $(".text-smallcaps").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-lowercase");
                if($('.result-text').hasClass('text-uppercase'))
                {
                    $(this).closest('.font-picker').find('.result-text').removeClass("text-uppercase");
                }
             });
             $(".text-bottomline").on('click',function(){
                $(this).closest('.font-picker').find('p').toggleClass("text-line");
                if($('.result-text').hasClass('text-strike'))
                {
                    $(this).closest('.font-picker').find('.result-text').removeClass("text-strike");
                }
             });
             $(".text-strikethrough").on('click',function(){
                $(this).closest('.font-picker').find('p').toggleClass("text-strike");
                if($('.result-text').hasClass('text-line'))
                {
                     $(this).closest('.font-picker').find('.result-text').removeClass("text-line");
                }
             });
             $(".make-left").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-left");
                $(this).closest('.font-picker').find('.result-text').removeClass("text-center");
                $(this).closest('.font-picker').find('.result-text').removeClass("text-right");
                $(this).closest('.font-picker').find('.result-text').removeClass("text-justify");
             });
             $(".make-center").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-center");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-right");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-left");
                $(this).closest('.font-picker').find('.result-text').removeClass("text-justify");
                
             });
             $(".make-right").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-right");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-center");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-left");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-justify");
             });
             $(".make-justify").on('click',function(){
                $(this).closest('.font-picker').find('.result-text').toggleClass("text-justify");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-center");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-left");
                 $(this).closest('.font-picker').find('.result-text').removeClass("text-right");
             });

              //calendar
            $("#jqxCalendar").jqxCalendar({ width: '300px', height: '250px' });
              $('#jqxcalendar').bind('valuechanged', function (event) {
                  var date = event.args.date;
                  $("#log").text(date.toDateString());
              });


          // for topbar settings switch button

            $(".switch").on('click',function()
            {
              if($(this).children('.cmn-toggle').is(':checked'))
              {
                $(this).parent().find(".text-toggle").addClass('text-selected');
              }
              else 
              {
                $(this).parent().find(".text-toggle").removeClass('text-selected');
              }
            });

            // for activity profile switch button
           
            // $(".switch").on('click',function()
            // {
            //   if($(('.cmn-toggle').is(':checked')))
            //   {
            //     $(".public").addClass('public-green');
            //   }
            //   else 
            //   {
            //     $(".public").removeClass('public-green');
            //   }
            // });



            $(".btn-cross").click(function(e){
                e.preventDefault();
                $(this).parent().find(".mail,.btn-cross").hide();
                $(this).parent().find(".btn-connect").show();
            });


            $(".search-list li a .cross-icon").click(function(e){
                e.preventDefault();
                $(this).parents("li").fadeOut(500);
              });  

             $('.layout-img').on('click',function(e){
                e.preventDefault(); 
                $(this).siblings(".layout-img").removeClass('active');
                if($(this).hasClass('active'))
                {
                    $(this).removeClass('active');    
                }
                else
                {
                    $(this).addClass('active');    
                }
                 
            });


             // responsive bar charts js
             window.onload = function () {
                var chart = new CanvasJS.Chart("chartContainer", {
                   
                    data: [{
                        type: "column",
                        dataPoints: [
                            { y: 80, label: "11" },
                            { y: 130, label: "12" },
                            { y: 149, label: "13" },
                            { y: 109, label: "14" },
                            { y: 40, label: "15" },
                            { y: 80, label: "16" },
                            { y: 149, label: "17" },
                            { y: 100, label: "18" },
                            { y: 130, label: "19" },
                            { y: 139, label: "20" },
                            { y: 179, label: "21" },
                            { y: 90, label: "22" },
                            { y: 149, label: "23" },
                            ]
                    }]
                });
                chart.render();
            };
            
        
});

    // document.getElementById('get_file').onclick = function() {
    // document.getElementById('my_file').click();
    // };

    // document.getElementById('get_project').onclick = function() {
    // document.getElementById('my_project').click();
    // };

});


