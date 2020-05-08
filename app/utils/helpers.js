export const getYupErrors = errors => Object.values(errors);
export const getMainErrorYup = errors => getYupErrors(errors)[0];
