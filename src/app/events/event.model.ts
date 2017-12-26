export class Event {

    constructor(

        public creator: string,
        public user: string,
        public groupName: string,
        public location: string,
        public date: number,
        public startTime: number,
        public finishTime: number,
        public status: string,
        public evaluation: string
    ) {}
}

//will be used as angular component model
