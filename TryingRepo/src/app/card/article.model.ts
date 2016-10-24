export class ArticleModel {
    title: string;
    link: string;
    vote: number;

    constructor(title: string, link: string, vote?: number){
        this.title = title;
        this.link = link;
        this.vote = vote || 0;
    }

    upVote() :void {
      this.vote++;
    }

    downVote() : void{
      this.vote--;
    }

    domain() {
      try{
        const url: string = this.link.split('//')[1]; // splitting link on // and get the 2nd index to remove https://
        return url.split('/')[0]; // splitting url on / and get the 1st index i.e the domain
      }
      catch(err) {
        return null;
      }
    }
}