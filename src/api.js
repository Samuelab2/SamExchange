const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(response => response.json())
    .then(res => res.data)
}

export default getAssets
