function format(level, msg, meta) {
  const entry = { level, timestamp: new Date().toISOString(), msg };
  if (meta !== undefined) entry.meta = meta;
  return JSON.stringify(entry);
}

module.exports = {
  info: (msg, meta) => console.log(format('INFO', msg, meta)),
  error: (msg, meta) => console.error(format('ERROR', msg, meta))
};
