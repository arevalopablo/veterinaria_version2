const dataPatient = ['nombre', 'raza', 'dueño', 'teléfono', 'fecha', 'hora', 'síntomas'].map((title) => {
  switch (title) {
    case 'hora':
      return {
        name: title,
        tag: 'select'
      }
    case 'síntomas':
      return {
        name: title,
        tag: 'textarea'
      }    
    default:
      return {
        name: title,
        tag: 'input'
      }
  }
})

const inputDecider = (param) => {
  // switch (param) {
  //   case "teléfono":
  //     return "number";
  //   case "fecha":
  //     return "date";
  //   default:
  //     return "text";
  // }
};

const inputTypes = {
  'teléfono': 'number',
  'fecha': 'date',
  'hora': 'time',
  'alternative': 'text'
}


const dataTime = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export { dataPatient, dataTime, inputTypes, inputDecider };
