<div class="container-fluid">
    <%= _.template($('#input_constructor').html())({id:"Value", description:tr("String To Apply Regexp"), default_selector: "string", disable_int:true}) %>
    <%= _.template($('#input_constructor').html())({id:"Regexp", description:tr("Separator Regular Expression"), default_selector: "string", disable_int:true}) %>
    <%= _.template($('#variable_constructor').html())({id:"Result", description:tr("Result"), default_variable: "LIST_FROM_STRING"}) %>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>