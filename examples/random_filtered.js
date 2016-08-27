var libgen = require('libgen');

var options = {
  mirror: 'http://gen.lib.rus.ec',
  count: 5,
  fields: ['Title',
           { Language: 'English' }
          ]
};

libgen.random.text(options,function(err,data){
  if (err) return console.error(err);
  var n = data.length;
  console.log(n + ' random English-language texts with titles');
  while (n--){
    console.log('***********');
    console.log('Title: ' + data[n].title);
    console.log('Author: ' + data[n].author);
    console.log('Download: ' +
                'http://gen.lib.rus.ec/book/index.php?md5=' +
                data[n].md5.toLowerCase());
  }
});
