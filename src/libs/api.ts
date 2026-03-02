//asincronica porque pido la conexion a la api en productos
export async function GetProducts() { 

  const response = await fetch("https://685034f2e7c42cfd1797d7a0.mockapi.io/api/camonkii/products");
  
  return response.json();

}