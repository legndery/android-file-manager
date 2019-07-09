function FormError(shellJSOutput) {
  if (shellJSOutput.code) {
    throw new Error(`Coudn't execute command: ${shellJSOutput.stderr}`);
  } else {
    return true;
  }
}
function WrapErrorOrData(err, { data, msg }) {
  const retObj = {
    success: false,
    msg: '',
    data: {},
  };
  if (err) {
    retObj.msg = err.message;
    retObj.data = err;
  } else {
    retObj.success = true;
    retObj.msg = msg;
    retObj.data = data;
  }
  return retObj;
}
module.exports = { FormError, WrapErrorOrData };
