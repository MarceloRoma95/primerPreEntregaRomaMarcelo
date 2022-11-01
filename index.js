let streaming = (prompt('Bienvenido a la pagina ofical de CheloContenidos donde podrás eligir que plataforma de Streaming deseas adquirir atraves de una suscripcion mensual en pesos Argentinos, donde podras darlo de baja en cualquier momento que desee, las opciones mas populares son las siguientes: 1.Disney+ - 2.Netflix- 3.Star+ - 4.HboMax'))
 
let totalCompra = 0
  let seguirComprando = true
  let decision
  while (seguirComprando === true) {
    if (streaming === 1) {
      totalCompra = totalCompra + 489
    } else if (streaming === 2) {
      totalCompra = totalCompra + 1250
    } else if (streaming === 3) {
      totalCompra = totalCompra + 374
    } else if (streaming === 4) {
      totalCompra = totalCompra + 729
    } else {
        streaming = parseInt(prompt('Elige un streaming habilitado para comprar: 1.Disney+ - 2.Netflix- 3.Star+ - 4.HboMax'))
      continue
  }
  
    decision = parseInt(prompt('Quieres seguir comprando? las opciones son: 7.Si - 8.No'))
    if (decision === 7) {
        streaming = parseInt(prompt('Vuelve a elegir un streaming habilitado para comprar: 1.Disney+ - 2.Netflix- 3.Star+ - 4.HboMax'))
    } else {
      seguirComprando = false
    }
  }
  alert(`Total de la compra de streaming es de ${totalCompra} pesos argentinos desde ya muchas gracias, espero que vuelva pronto.`)
