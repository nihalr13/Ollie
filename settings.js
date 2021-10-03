console.log("working...")
if (localStorage.story_category == null){
    var story_category = document.getElementById("story_category");
    var browser_notifications = document.getElementById("browser_notifications");
    var email_notifications = document.getElementById("email_notifications");
    localStorage.story_category = story_category.selectedIndex;
    localStorage.browser_notifications = browser_notifications.selectedIndex;
    localStorage.email_notifications = email_notifications.selectedIndex;
}
else {
    const story_category = document.getElementById("story_category");
    const browser_notifications = document.getElementById("browser_notifications");
    const email_notifications = document.getElementById("email_notifications");
    story_category.selectedIndex = localStorage.story_category;
    browser_notifications.selectedIndex = localStorage.browser_notifications;
    email_notifications.selectedIndex = localStorage.email_notifications

}

function onSave() {
    const story_category = document.getElementById("story_category");
    const browser_notifications = document.getElementById("browser_notifications");
    const email_notifications = document.getElementById("email_notifications");
    localStorage.story_category = story_category.selectedIndex;
    localStorage.browser_notifications = browser_notifications.selectedIndex;
    localStorage.email_notifications = email_notifications.selectedIndex;

}
