function goToCategory(category) {
    var parameters = new URLSearchParams();
    parameters.append("category", category);
    location.href = "story_details.html?" + parameters.toString();
    window.open(location.href);
    console.log("what?")
    return false;
}