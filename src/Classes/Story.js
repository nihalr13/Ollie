export class Story {
    constructor(title, description, time, assigner, assignee, priority, category, date_created) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.assigner = assigner;
        this.assignee = assignee;
        this.priority = priority;
        this.category = category;
        this.date_created = date_created;
    }
}

export default Story;