export class Quote {
    public showDescription:boolean;
    constructor(public author:string, public quote:string, public writter:string, public downvote:number, public upvote:number,public completeDate:Date){
    this.showDescription=false
}
}

