export default class SendEmailRequestModel {
    to: string
    subject: string
    text: string

    constructor(to: string, subject: string, text: string) {
        this.to = to;
        this.subject = subject;
        this.text = text;
    }
}