import axios from 'axios';

const baseurl = 'https://admin-tool-1c66a819a095.herokuapp.com';

export async function fetchHomeFeedElements() {
  return await axios.get(`${baseurl}/api/v1/homefeed/homefeed-elements/`).then((response) => response.data);
}

export async function createHomeFeedElement(data) {
  return await axios.post(`${baseurl}/api/v1/homefeed/homefeed-elements/`, data);
}

export async function updateElementsOrder(data) {
  return await axios.patch(`${baseurl}/api/v1/homefeed/homefeed-elements/update-order/`, data);
}

export async function updateHomeFeedElement(uuid, data) {
  return await axios.patch(`${baseurl}/api/v1/homefeed/homefeed-elements/${uuid}/`, data);
}

export async function deleteHomeFeedElement(uuid) {
  return await axios.delete(`${baseurl}/api/v1/homefeed/homefeed-elements/${uuid}/`);
}
