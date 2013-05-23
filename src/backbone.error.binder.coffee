class Backbone.ErrorBinder
  constructor: (receiverClass = "error") ->
    @receiverClass = receiverClass

  bind: (model, rootEl, attributeBindings) ->
    model.on "change", =>
      console.log @model
      if model.has("errors")
        errors = model.get("errors")
        _.each attributeBindings, (attributes, field) =>
          if errors[field]
            @toogleReceiverClass true, rootEl, attributes.messagesEl, attributes.receiverEl
            $ul = $("<ul></ul>");
            _.each errors[field], (error) =>
              $li = $("<li></li>").text error
              $ul.append $li
            @findMessagesContainer(rootEl, attributes.messagesEl)
              .empty()
              .append($ul)
              .show()
          else
            @toogleReceiverClass false, rootEl, attributes.messagesEl, attributes.receiverEl
            @findMessagesContainer(rootEl, attributes.messagesEl).empty()

  findMessagesContainer: (rootEl, messagesEl) ->
    $(rootEl).find(messagesEl)
  toogleReceiverClass: (add, rootEl, messagesEl, receiverEl) ->
    $ele
    if receiverEl
      $ele = $(rootEl).find(receiverEl)
    else
      $ele = @findMessagesContainer(rootEl, messagesEl).parents(".control-group")
    if add then $ele.addClass(@receiverClass) else $ele.removeClass(@receiverClass)