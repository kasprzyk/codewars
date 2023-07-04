const beeramid = (bonus, price) => {
  let beeramidLevels = 0;
  let beeramidPrice = price*beeramidLevels;
  while(beeramidPrice<=bonus){
    beeramidLevels++;
    beeramidPrice += beeramidLevels**2*price;
    if(beeramidPrice>bonus){
      beeramidLevels--;
      break
    }
  }
  return beeramidLevels
}
