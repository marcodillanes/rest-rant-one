const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Iced White Mocha</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
