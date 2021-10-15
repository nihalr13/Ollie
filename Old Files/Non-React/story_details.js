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

function getRandomInt(max, inclZero) {
    if (inclZero === false) {
        var num = 0;
        while (num == 0) {
            num = Math.floor(Math.random() * max);
        }
        return num;
    }
    else {
        return Math.floor(Math.random() * max);
    }

}

function getParameters() {
    var parameter = new URLSearchParams(window.location.search);
    return parameter.get("category");
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


const header = document.getElementsByClassName("header")[0];
const container = document.getElementsByClassName("container")[0];

//TODO: select stories depending on which category selected.

var selectedCategory = getParameters();

for (let story of storiesAsObj) {
    if (story.category != selectedCategory) {
        continue;
    }
    var story_item = document.createElement("div");
    story_item.classList.add("story-item");

    var title = document.createElement("h5");
    title.classList.add("story-title");
    title.innerHTML = "Title: " + story.title;
    story_item.appendChild(title);


    var time = document.createElement("h5");
    time.classList.add("story-time");
    time.innerHTML = "Time: " + story.time;
    story_item.appendChild(time);


    var description = document.createElement("p");
    description.classList.add("story-description");
    description.innerHTML = "Description: " + story.description;
    story_item.appendChild(description);


    var priority = document.createElement("h5");
    priority.classList.add("story-priority");
    priority.innerHTML = "Priority: " + story.priority;
    story_item.appendChild(priority);


    var category = document.createElement("h5");
    category.classList.add("story-category");
    category.innerHTML = "Category: " + story.category;
    story_item.appendChild(category);


    var assignee = document.createElement("h5");
    assignee.classList.add("story-assignee");
    assignee.innerHTML = "Assignee: " + story.assignee;
    story_item.appendChild(assignee);


    var assigner = document.createElement("h5");
    assigner.classList.add("story-assigner");
    assigner.innerHTML = "Assigner: " + story.assigner;
    story_item.appendChild(assigner);


    container.appendChild(story_item);

}

/*
    
 */



