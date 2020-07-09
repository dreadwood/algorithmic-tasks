module.exports = function getSeason(date) {
  let message = 'Unable to determine the time of year!';

  if (arguments.length > 0) {
    let month = date.getUTCMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        message = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        message = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        message = 'summer';
        break;
      default:
        message = 'autumn';
    };
  }

  return message;
};
