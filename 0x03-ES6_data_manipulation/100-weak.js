const weakMap = new WeakMap();
module.exports.weakMap = weakMap;

// Create and export the queryAPI function
function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count of API calls
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

module.exports.queryAPI = queryAPI;
