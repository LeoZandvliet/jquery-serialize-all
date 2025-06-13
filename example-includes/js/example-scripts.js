function Compare() {
    var serializeResults = $("form[name='testForm']").serialize();
    var serializeAllResults = $("form[name='testForm']").serializeAll();

    $("#results").append(
        "<p><strong>$('form').serialize() output...</strong></p>" +
        "<p class=\"red\">" + serializeResults + "</p>" +
        "<p><strong>$('form').serializeAll() output...</strong></p>" +
        "<p class=\"green\">" + serializeAllResults + "</p>"
    );

    serializeResults = $("input, select").serialize();
    serializeAllResults = $("input, select").serializeAll();

    $("#results").append(
        "<p><strong>$('input, select').serialize() output...</strong></p>" +
        "<p class=\"red\">" + serializeResults + "</p>" +
        "<p><strong>$('input, select').serializeAll() output...</strong></p>" +
        "<p class=\"green\">" + serializeAllResults + "</p>"
    );
}
