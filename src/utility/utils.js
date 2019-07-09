function FormError(shellJSOutput) {
  if (shellJSOutput.code) {
    throw new Error(`Coudn't execute command: ${shellJSOutput.stderr}`);
  } else {
    return true;
  }
}

module.exports.FormError = FormError;
