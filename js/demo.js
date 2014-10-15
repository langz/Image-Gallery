/*
* Bootstrap Image Gallery JS Demo 3.0.1
* https://github.com/blueimp/Bootstrap-Image-Gallery
*
* Copyright 2013, Sebastian Tschan
* https://blueimp.net
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/MIT
*/

/*jslint unparam: true */
/*global blueimp, $ */

$(function () {
  'use strict';

  // Load images from flickr:
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.photosets.getPhotos',
      api_key: '44bcc845ec699ff728a7be12135cfaf9',
      user_id: "93557106@N06",
      photoset_id: "72157648758809601"
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var linksContainer = $('#links'),
    baseUrl;
    // Add the images as links with thumbnails to the page:
    $.each(result.photoset.photo, function (index, photo) {
      console.log(photo);
      baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret;
      $('<a/>')
      .append($('<img>').prop('src', baseUrl + '_s.jpg'))
      .prop('href', baseUrl + '_b.jpg')
      .attr('data-gallery', '')
      //Add gallery attribute with value camera, used to filtering
      .attr('gallery', "camera")
      .appendTo(linksContainer);
    });
    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
  });


});
$(function () {
  'use strict';
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.photosets.getPhotos',
      api_key: '44bcc845ec699ff728a7be12135cfaf9',
      user_id: "93557106@N06",
      photoset_id: "72157648365898940"
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var linksContainer = $('#links'),
    baseUrl;
    // Add the images as links with thumbnails to the page:
    $.each(result.photoset.photo, function (index, photo) {
      console.log(photo);
      baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret;
      $('<a/>')
      .append($('<img>').prop('src', baseUrl + '_s.jpg'))
      .prop('href', baseUrl + '_b.jpg')
      .attr('data-gallery', '')
      //Add gallery attribute with value mobile, used to filtering
      .attr('gallery', "mobile")
      .addClass('hidden')
      .appendTo(linksContainer);
    });
    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
  });
});

$( "#mobile" ).on( "click", function() {
  $( this ).addClass("active");
  $( "#camera" ).removeClass("active");

  $('a[gallery="camera"]').each(function() {
    $( this ).addClass("hidden");
  });
  $('a[gallery="mobile"]').each(function() {
    $( this ).removeClass("hidden");
  });
});
$( "#camera" ).on( "click", function() {
  $( this ).addClass("active");
  $( "#mobile" ).removeClass("active");

  $('a[gallery="mobile"]').each(function() {
    $( this ).addClass("hidden");
  });
  $('a[gallery="camera"]').each(function() {
    $( this ).removeClass("hidden");
  });
});
