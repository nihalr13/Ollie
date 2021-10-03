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

var stories = [];
const categories = ["Backlog", "In Progress", "Blocked", "Done"];
const title_ = "test ";
const description_ = "description of story ";
const assigner_ = "Qusai";
const assignee_ = "Qusai";

for (var i = 0; i < 4; i++) {
    stories.push(new Story(title_ + (i+1).toString(), description_ + (i+1).toString(), i+1, assigner_, assignee_, i+1, categories[i]));
}


const header = document.getElementsByClassName("header")[0];
const container = document.getElementsByClassName("container")[0];

for (let story of stories) {
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



