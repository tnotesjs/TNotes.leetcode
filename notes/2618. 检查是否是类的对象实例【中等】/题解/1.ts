function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if ([null, undefined].includes(obj) || !(classFunction instanceof Function))
    return false;
  else return Object(obj) instanceof classFunction;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
