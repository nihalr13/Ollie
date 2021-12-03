export class Story {
    constructor(title, description, time, assigner, assignee, priority, category, date_created, comments, watch_list) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.assigner = assigner;
        this.assignee = assignee;
        this.priority = priority;
        this.category = category;
        this.date_created = date_created;
        this.comments = comments;
        this.watch_list = watch_list;
    }
}

export default Story;