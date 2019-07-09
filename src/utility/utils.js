function FormError(shellJSOutput) {
  if (shellJSOutput.code) {
    throw new Error(`Coudn't execute command: ${shellJSOutput.stderr}`);
  } else {
    return true;
  }
}
function WrapErrorOrData(err, success = {}) {
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
    retObj.msg = success.msg || '';
    retObj.data = success.data || '';
  }
  return retObj;
}
module.exports = { FormError, WrapErrorOrData };
