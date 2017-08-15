/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
    // todo 3 //
        $('body').css('background', 'rgb(19, 41, 70)');
        $('#section-bio')
        .css({
            'background-color': '#f8d481',
            'border': '2px solid #739921',
            'border-radius': '25px',
            'padding': '20px'
        });
        $('#section-quotes')
        .css({
            'background-color': '#f8d481',
            'border': '2px solid #739921',
            'border-radius': '25px',
            'padding': '20px'
        });
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('.quote').css({
            'font-style': 'italic',
            'padding-left': '10px',
            'padding-right': '10px'
            });
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        // This is a capitalize first function for populating my General Discography list a bit further down!
        
        let capitalizeFirst = function(str) {
            return str.charAt(0).toUpperCase() + str.substr(1);
        };
        
        // Variables to reference specific bits of data within the json element.
        let topRated = data.discography.topRated;
        let genDisco = data.discography.recordings;
        let billImages = data.images.billy;
        let billsRider = data.rider;
        
    // todo 4 //
        _.map(topRated, function(album, i, a) {
            $('<li>')
                .text(album.title)
                .css('font-weight', 'bold')
                .appendTo($('#list-top-rated'));
        });
        
    // todo 5 //
        
        let $section = $('<section>')
            .attr('id', 'section-recordings');
        $section
            .append($('<h3>'))
            .appendTo($('#sidebar'));
        $section.append($('<ul>')
            .attr('id', 'list-recordings'))
            .appendTo($('#section-recordings'));
        
        _.map(genDisco, function(album, i, a) {
            // Below is an attempt to create an array of all of the <div> elements required for todo 5. Not quite working, maybe later.
            //Actually it works now, _.filter will not work in this instance because it is only creating an array, dropping <div> as well as it's class.. and for some reason everything except the "value"
            
            let $newDiv = _.map(album, function(value, key, a) {
                if(key !== 'art'){
                    //console.log(key);
                    return $('<div>')
                        .attr('class', key)
                        .text(`${capitalizeFirst(key)}: ${value}`);
                }
            });
            //console.log($divTest);
            $('<li>')
                .attr('class', 'recording')
                .append($newDiv)
                .appendTo($('#list-recordings'));
            
            // // Below is the same as above, only much more verbose. No loop to create the <div> elements. 
            
            // let $div = [$('<div>')
            //     .attr('class', 'title')
            //     .text(`Title: ${e.title}`), 
            // $('<div>')
            //     .attr('class', 'artist')
            //     .text(`Artist: ${e.artist}`),
            // $('<div>')
            //     .attr('class', 'release')
            //     .text(`Release: ${e.release}`), 
            // $('<div>')
            //     .attr('class', 'year')
            //     .text(`Year: ${e.year}`)];
                
            // $('<li>')
            //     .attr('class', 'recording')
            //     .append($div)
            //     .appendTo($('#list-recordings'));
            
        });
        
    // todo 6 // 
        
        // NOW we're going to prepend album art onto each of our lists!
        // #list-top-rated
        // #list-recordings
        
        let $topArt = $('<div>')
            .attr({
                'id': 'image-container-top-recording',
                'class': 'image-container',
            })
            .append($('<img>')
                .attr({
                    'id': 'top-recording-image',
                    'src': topRated[0].art,
                    'class': 'image'
                }));
                
        let $genArt = $('<div>')
            .attr({
                'id': 'image-container-general-recording',
                'class': 'image-container',
            })
            .append($('<img>')
                .attr({
                    'id': 'general-recording-image',
                    'src': genDisco[0].art,
                    'class': 'image'
                }));
                
        $('#list-top-rated').prepend($topArt);
        $('#list-recordings').prepend($genArt);
        
    // todo 7 //
        // Here we're going to define Billy's image to have some specific dimensions. 
        
        $('#image-billy').css({
            'max-width': '200px',
            'max-height': '200px',
        });
        
        let index = 1;
        
        $('#image-billy').on('click', function(event) {
            $('#image-billy').fadeOut(0, function() {
                //const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
                $('#image-billy').attr('src', billImages[index]);
                $('#image-billy').fadeIn('slow', function () {
                    if (index === billImages.length - 1) {
                        index = 0;
                    } else {
                        index++;
                    }
                //pacifier.stop(); 
                });
            });
            
        });
        
        //.attr('src', 'images/billy/billy-1.jpg');
        
    // todo 8 //
        // Gonna make a on click event, when we click the title of an album the art above changes to that album. Here's some stuff I'll need to reference...
        //#top-recording-image
        //topRated = data.discography.topRated;
        //#list-top-rated 'li'
        
         $('#list-top-rated > li').on('click', function(event) {
             // `this` will not work inside the for loop being called on topRated, since this always refers to the object that calls it. Come on!
             // So here I'm calling jQuery on this and using it's built in .text() method to retreive the text of what was clicked on, and assigning it to a variable to be called within a forEach loop..
             var that = $(this).text();
             //let index = 0;
             topRated.forEach(function(album, index, array) {
                 //console.log(album);
                 // Here I'm comparing `that` to the album.title, and if it matches, setting it to that albums art. Hooray!
                 if (that === album.title) {
                    $('#top-recording-image')
                        .attr('src', album.art);
                 }
             });
         });
        
        // So now I'm going to do the above, but with the general recordings. I'll need to work specifically with the title of each album.
        //let genDisco = data.discography.recordings;
        //general-recording-image
        
        $('#general-recording-image').css({
            'min-width': '200px',
            'min-height': '200px',
            'max-height': '200px',
        });
        
        $('#list-recordings > li').on('click', function(event) {
            // again defining `this` to a variable so I can work with the clicked list element inside the nested forEach function.. Used the find method to find the specific div I was looking for, and slice to remove the text that says 'Title: '
            var that = ($(this).find('div.title').text()).slice(7);
            genDisco.forEach(function(album, index, array) {
                 if (that === album.title) {
                    $('#general-recording-image')
                        .attr('src', album.art);
                 }
             });
         });
        
    // todo 9 //
    
        var createTable = function(rider){
            var createRow = function(object){
                
                var $row = $("<tr>");
                var $type = $("<td>").text(object.type);
                var $desc = $("<td>").text(object.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
            };
            var $table = $("<table>");
        // I decided I wanted my table to have a header.
            var $header = $('<tr>');
            var $data = $('<th>').text('Data');
            var $desc = $('<th>').text('Description');
            $header.append($data);
            $header.append($desc);
            $table.append($header);
        // end header stuff //
            var $rows = rider.map(createRow);
            $table.append($rows);
            return $table;
        };

    // styling my table //

        createTable(billsRider).css({
            'border': '1px solid #d6d6d6',
            'border-radius': '10px',
            'background-color': '#f8d481',
            'margin': 'auto',
            'margin-top': '20px',
            'padding': '10px'
        }).appendTo(".content");
        $('th').css({
            'background-color': '#4CAF50',
            'color': 'white',
        });
        $('tr:nth-child(even)').css({
            'background-color': '#f2f2f2'
        });
        
        $('tr:nth-child(odd)').css({
            'background-color': 'rgb(252, 221, 152)'
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


