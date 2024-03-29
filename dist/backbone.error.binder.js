// Generated by CoffeeScript 1.6.1
(function() {

  Backbone.ErrorBinder = (function() {

    function ErrorBinder(receiverClass) {
      if (receiverClass == null) {
        receiverClass = "error";
      }
      this.receiverClass = receiverClass;
    }

    ErrorBinder.prototype.bind = function(model, rootEl, attributeBindings) {
      var _this = this;
      return model.on("change", function() {
        var errors;
        console.log(_this.model);
        if (model.has("errors")) {
          errors = model.get("errors");
          return _.each(attributeBindings, function(attributes, field) {
            var $ul;
            if (errors[field]) {
              _this.toogleReceiverClass(true, rootEl, attributes.messagesEl, attributes.receiverEl);
              $ul = $("<ul></ul>");
              _.each(errors[field], function(error) {
                var $li;
                $li = $("<li></li>").text(error);
                return $ul.append($li);
              });
              return _this.findMessagesContainer(rootEl, attributes.messagesEl).empty().append($ul).show();
            } else {
              _this.toogleReceiverClass(false, rootEl, attributes.messagesEl, attributes.receiverEl);
              return _this.findMessagesContainer(rootEl, attributes.messagesEl).empty();
            }
          });
        }
      });
    };

    ErrorBinder.prototype.findMessagesContainer = function(rootEl, messagesEl) {
      return $(rootEl).find(messagesEl);
    };

    ErrorBinder.prototype.toogleReceiverClass = function(add, rootEl, messagesEl, receiverEl) {
      $ele;
      var $ele;
      if (receiverEl) {
        $ele = $(rootEl).find(receiverEl);
      } else {
        $ele = this.findMessagesContainer(rootEl, messagesEl).parents(".control-group");
      }
      if (add) {
        return $ele.addClass(this.receiverClass);
      } else {
        return $ele.removeClass(this.receiverClass);
      }
    };

    return ErrorBinder;

  })();

}).call(this);
