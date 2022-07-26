# jQuery Serialize All

A jQuery Plugin / Extension designed to overcome a shortcoming in [jQuery Serialize](https://api.jquery.com/serialize/).

Include **empty / unselected** `input[type=radio]`, `input[type=checkbox]` and `select[multiple]` elements alongside standard jQuery .serialize() data. Useful in the case where you need to also report empty form fields back to a web backend on the QueryString.

### Example

▶️ An example of the plugin can be found at https://mikeirvingweb.github.io/jquery-serialize-all/

### Installation

➕ Add an include to the plugin file `jquery-serialize-all.js`, after the jQuery include.

`<script src="src/jquery-serialize-all.js"></script>`

### Usage
🧑‍💻 Simply use `.serializeAll()` instead of `.serialize()` in your code.

`var serializeAllResults = $("form[name='myform']").serializeAll();`

### Contributions

🍴 Feel free to Fork / Branch / Modify, raise any Pull Requests for changes.

### Author

Written by Mik © 2022
