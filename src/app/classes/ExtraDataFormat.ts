export default class ExtraDataFormat{
  whichIs!: string;
  content!: string[] | string;

  constructor( whichIs: string, content: string[] | string ) {
    this.whichIs = whichIs
    this.content = content
  }
}