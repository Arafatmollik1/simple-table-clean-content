(function() {
    tinymce.PluginManager.add( 'table_clean', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('table_clean', {
            title: 'Table Clean button-Arafat',
            image: url + '/../img/table-icon.png',
            
        }); 
        
    });
})();