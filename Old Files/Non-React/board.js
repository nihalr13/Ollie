class Story {
    constructor(title, description, time, assigner, assignee, priority, category) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.assigner = assigner;
        this.assignee = assignee;
        this.priority = priority;
        this.category = category;
    }
}

function goToCategory(category) {
    var parameters = new URLSearchParams();
    parameters.append("category", category);
    location.href = "story_details.html?" + parameters.toString();
    window.open(location.href);
    console.log("what?")
    return false;
}

const categories = ["backlog", "inprogress", "blocked", "done"];
const description_ = "description of story ";
const assigner_ = "Qusai";
const assignee_ = "Bob";

var i = 1;
var storiesAsDict = [
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 6, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 5, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]}
];

var storiesAsObj = [];


for (i = 0; i < 10; i++) {
    storiesAsObj.push(new Story(storiesAsDict[i]["title"], storiesAsDict[i]["description"], storiesAsDict[i]["time"], storiesAsDict[i]["assigner"], storiesAsDict[i]["assignee"], storiesAsDict[i]["priority"], storiesAsDict[i]["category"]));
}



// Inspired by https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("myModal");
var triggers = document.getElementsByClassName("indiv-story-anchor");
triggers = Array.from(triggers);
var span = document.getElementsByClassName("close")[0];

triggers.forEach( (trigger) => {
    trigger.onclick = () => {
        var p = document.getElementById("modal-p-content");
        var storyName = trigger.getElementsByClassName("story-title")[0].innerHTML;
        var storyObj = storiesAsObj.find((story) => story.title == storyName);
        p.innerHTML = "title: " + storyObj.title + "; " +
         "description: " + storyObj.description + "; " +
         "time: " + storyObj.time + "; " +
         "assigner: " + storyObj.assigner + "; " +
         "assignee: " + storyObj.assignee + "; " +
         "priority: " + storyObj.priority + "; " +
         "category: " + storyObj.category + "; ";
        modal.style.display = "block";
    }

});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}