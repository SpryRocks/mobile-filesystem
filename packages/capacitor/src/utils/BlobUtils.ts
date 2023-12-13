/* eslint-disable */
export const createBlob = (data: any, datatype: string = 'text/plain') => {
  let blob;

  try {
    blob = new Blob([data], {type: datatype});
  } catch (err) {
    // @ts-ignore
    window['BlobBuilder'] =
        // @ts-ignore
    window['BlobBuilder'] ||
        // @ts-ignore
        window['WebKitBlobBuilder'] ||
        // @ts-ignore
        window['MozBlobBuilder'] ||
        // @ts-ignore
        window['MSBlobBuilder'];

    // @ts-ignore
    if (err.name === 'TypeError' && window['BlobBuilder']) {
      // @ts-ignore
      let bb = new window['BlobBuilder']();
      bb.append(data);
      blob = bb.getBlob(datatype);
    } else { // @ts-ignore
      if (err.name === 'InvalidStateError') {
            // InvalidStateError (tested on FF13 WinXP)
            blob = new Blob([data], {type: datatype});
          } else {
            // We're screwed, blob constructor unsupported entirely
            throw new Error('Unable to create blob' + JSON.stringify(err));
          }
    }
  }
  return blob;
};
