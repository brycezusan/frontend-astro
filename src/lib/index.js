export const formatearMoneda = moneda =>{
  return moneda.toLocaleString('en-US',{
    style:'currency',
    currency:'USD'
  })
}

export const formatearFecha = fecha=>{
  const nuevaFecha = new Date(fecha)

  const opciones ={
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return nuevaFecha.toLocaleDateString('pe-PE', opciones)
}