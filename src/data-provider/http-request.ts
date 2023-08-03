const httpRequests = <T>(url: string, options: RequestInit, callback: (err: Error | null, data: any) => void): void => {
  const opt = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  fetch(url, opt)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      } else {
        return response.json()
      }
    })
    .then((data) => {
      callback(null, data as T)
    })
    .catch((error) => {
      callback(error, null)
    })
}

export default httpRequests
