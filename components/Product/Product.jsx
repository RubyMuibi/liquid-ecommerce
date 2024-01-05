const fetchProducts = async () => {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
    };
  
    const response = await fetch(`${config.apiUrl}/api/products?populate=*`, requestOptions);
    const responseBody = await response.json()
  
    return responseBody
  };

