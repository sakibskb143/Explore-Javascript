/*
* chair === > 3ft
  table === > 5ft 
  bed  === > 10 ft

 */

  function woodQuantity(chairN ,tableN , bedN)
  {
      const perChair = 3 , perTable = 5 , perBed = 10 ;
      const woodRequired = chairN*perChair + perTable*tableN + perBed*bedN ;
      return woodRequired ;
  }

  const total_wood = woodQuantity(2,4,1);
  console.log("Total quantity of wood is : ", total_wood);