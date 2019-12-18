import moment from 'moment';
export class DateFormatValueConverter {
    toView(value) {
        if (value === undefined || value === null) {
            return;
        }
        let dateFormatted = moment(value).format('MMM Do YYYY');

        return dateFormatted;
    }
}  
