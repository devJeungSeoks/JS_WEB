export function updateHeaderToken(options) {
  const update = { ...options };
  update.headers = {
    ...update.headers,
    'X-AUTH_TOKEN' : localStorage.accessToken,
  };
  return update;
}