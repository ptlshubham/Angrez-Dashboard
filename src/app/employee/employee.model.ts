export class Employee {
    constructor(
        public index?: number,
        public id?: number,
        public fname?: string,
        public lname?: string,
        public contact?: string,
        public whatsapp?: number,
        public address?: string,
        public city?: string,
        public pincode?: number,
        public gender?: any,
        public services?: string,
        public isactive?: boolean,
        public createddate?: Date,
        public updateddate?: Date,
        public service?: any
        // public dateofbirth?: string
    ) {
    }
}
