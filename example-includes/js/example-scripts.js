function Compare() {
    var serializeResults = $("form[name='testForm']").serialize();
    var serializeAllResults = $("form[name='testForm']").serializeAll();

    $("#results").html(
        "<p><strong>.serialize() output...</strong></p>" +
        "<p class=\"red\">" + serializeResults + "</p>" +
        "<p><strong>.serializeAll() output...</strong></p>" +
        "<p class=\"green\">" + serializeAllResults + "</p>"
    );
}