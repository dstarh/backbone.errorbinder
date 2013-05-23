#Backbone.ErrorBinder


```Coffeescript
errorBinder = new Backbone.ErrorBinder([receiverClassName]) #defaults to error
@errorBinder.bind model, el,
  foo: 
    messagesEl: "#foo-errors"
    [receiverEl: "#some-parent-element"]
```


When model contains an object called `errors` it will attempt to find a key with that matchs your `foo`.  
If an error exists the value of the errors (usually an array) will be iterated and turned into an unorderd list.
The list will be appended to `messagesEl`
If `receiverEl` is not passed in your hash it defaults to the closest parent `.control-group`.
If you passed in receiverClassName to the constructor it will apply that class, otherwise it defaults to `error`
          
