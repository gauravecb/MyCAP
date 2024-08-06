sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'books/fiorilistreport/test/integration/FirstJourney',
		'books/fiorilistreport/test/integration/pages/BooksList',
		'books/fiorilistreport/test/integration/pages/BooksObjectPage',
		'books/fiorilistreport/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('books/fiorilistreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);