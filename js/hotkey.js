// In order for the search box to initialize properly, we have to manually click it
document.addEventListener('DOMContentLoaded', function() {
  const search = document.getElementById('search_input_react');
  search.click();
    // not sure how to get the event from the node module/plugin
    // so I'm just going to wait a bit and then set the placeholder
    // 500ms should be enough time for the search box to initialize
    setTimeout(function() {
        search.placeholder = 'Ctrl + k';
    }, 500);
    // we just do it again, in case the user has a slow connection
    setTimeout(function() {
        search.placeholder = 'Ctrl + k';
    }, 1000);
});

// Ctrl + K should focus the search bar, emulating the Algolia search UI
document.onkeydown = function(e) {
  if (e.ctrlKey && e.key == 'k'){
    const search = document.getElementById('search_input_react');
    search.value = '';
    search.focus();

    // By default, using Ctrl + K in Chrome will open the location bar, so disable this
    e.preventDefault();
  }
}
