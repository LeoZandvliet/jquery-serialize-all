/* jQuery Serialize All - https://github.com/mikeirvingweb/jquery-serialize-all */
(function ($) {

    $.fn.serializeAll = function () {
        var serialized = this.serialize(), empty = "";

        // add a map function as original jQuery.serialize() for collection of form, or form elements
        this.map(function(){
            // Can add propHook for "elements" to filter or add form elements
            let elements = jQuery.prop( this, "elements" );
            return elements ? jQuery.makeArray( elements ) : this;
        }).each(function () {
            if(!this.name)
                return;

            if(this.tagName === 'INPUT'){
                // some frameworks add a hidden field with an 'uncheck value', we don't want to override those
                if((this.type === 'checkbox' || this.type === 'radio') && this.checked === false){
                    let checkName = '&' + encodeURIComponent(this.name) + '='; // jQuery.serialize() encodes the names !

                    // exclude duplicates
                    if(('&' + serialized).indexOf(checkName) !== -1){
                        return;
                    }

                    // exclude duplicates
                    if(('&' + empty).indexOf(checkName) !== -1){
                        return;
                    }

                    empty += (empty !== "" ? "&" : "") + this.name + "=";
                }
            }else if(this.tagName === 'SELECT'){
                if(this.multiple === true && jQuery(this).find("option:selected").length === 0){
                    empty += (empty !== "" ? "&" : "") + this.name + "=";
                }
            }
        });

        return serialized + ((serialized !== "" && empty !== "") ? "&" : "") + empty;
    };

}(jQuery));
