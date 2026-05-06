function generateId() {
  return Math.random().toString(36).substring(2, 9).toUpperCase();
}

function validateFields(data, requiredFields) {
  const missing = requiredFields.filter(field => data[field] === undefined || data[field] === null);
  return missing.length === 0 ? null : missing;
}

module.exports = { generateId, validateFields };
