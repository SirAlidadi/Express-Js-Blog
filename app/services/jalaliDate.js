const jalaliMoment  = require('jalali-moment');

module.exports = (date, format='YYYY/MM/DD') => {
    return jalaliMoment(date).locale('fa').format(format);
}
