var contentful = require("contentful-management");

var client = contentful.createClient({
    accessToken: 'a83c2c2efaac8c806d417ba8b0a393c7530ad048d37e9c5f02291e4b016998c8'
});

client.getSpace('1caa0cg4vtaz').then(function(space){
    //Getting the reference of content_type
    space.getContentType('sampleUser').then(function(userContentType) {
      //Getting the contents from content_type
      space.getEntries({content_type: 'sampleUser'}).then(function(collection) {
        //Populating all the contents of content type chosen
        collection.items.forEach(function (entry) {
          if(entry.fields.userName) {
              console.log('userName ',entry.fields.userName);
              console.log('email ',entry.fields.email );
              console.log('mobile ',entry.fields.mobile);
              console.log('city ',entry.fields.city);
          }
        });
        //Creating an entry into content_type
        space.createEntry('sampleUser',{
          sys: {
              id: 'sampleUser'
          },
          fields: {
              userName: {
                  'en-US': 'Karthik'
              },
              email: {
                  'en-US': 'Karthik@deloitte.com'
              },
              mobile: {
                  'en-US': 1234567890
              },
              city:{
                'en-US':'Amaravathi'
              }
          }
        }).then(function(entry){
           console.log('entry ',entry);
           /*space.updateEntry({
             sys: {
                 id: 'sampleUser'
             },
             fields: {
                 userName: {
                     'en-US': 'Prasad'
                 },
                 email: {
                     'en-US': 'Harsha@chaitu.com'
                 },
                 mobile: {
                     'en-US': 0987654321
                 },
                 city:{
                   'en-US':'Goa'
                 }
             }
           }).then(function(record) {
             console.log('record updated ',record)
           },function(err){
             console.log('update error ',err);
           });*/
        });
      });
    },function(err){
      console.log('err ',err);
    });
});
