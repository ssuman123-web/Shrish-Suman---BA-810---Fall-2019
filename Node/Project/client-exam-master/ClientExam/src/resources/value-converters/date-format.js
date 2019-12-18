import moment from 'moment';
export class DateFormatValueConverter {
  toView(value) {
    if(value === undefined || value === null){
      return;
    }
    return moment(value).format('MMM Do YYYY');
  }
}
