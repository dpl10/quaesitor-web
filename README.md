# quaesitor-web
An Angular 8 web interface for [*QUAESITOR*](https://github.com/dpl10/quaesitor). A [live version](https://www.nybg.org/files/scientists/dlittle/quaesitor-web/) is hosted at the New York Botanical Garden.

*QUAESITOR* locates Latin scientific names in Chinese, Czech, Danish, Dutch, English, French, German, Italian, Japanese, Latin, Norwegian, Polish, Portuguese, Russian, Spanish, and Swedish text (approximately 96% of biodiversity titles). It uses a combination of pattern matching (regular expressions), a Bloom filter, and a trio of complementary ensembled neural networks.

### install
`npm install quaesitor-web --save`

### use
Use the [quaesitor.service](https://github.com/dpl10/quaesitor-web/blob/master/src/app/quaesitor.service.ts) in your own Angular project, see an implementation example in [quaesitor.component](https://github.com/dpl10/quaesitor-web/blob/master/src/app/quaesitor/quaesitor.component.ts).

### citation
If you use this software, please cite: Little, D.P. Submitted. Recognition of Latin scientific names using artificial neural networks. [Applications in Plant Sciences.](https://doi.org/ADD_DOI)

### license
[MIT](https://github.com/dpl10/quaesitor-web/blob/master/LICENSE)

### related repositories
* [quaesitor](https://github.com/dpl10/quaesitor)
* [quaesitor-cli](https://github.com/dpl10/quaesitor-cli)
