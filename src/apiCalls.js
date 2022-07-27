const getData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=54tG0XLF5cXBUhY7WzMwPePZsDU36EyS')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong, please try again!')
      }
    })
}

export default getData;
