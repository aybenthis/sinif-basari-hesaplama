function stuff(notlar) {
  let enKucukNot = Math.min(...notlar);

  let enBuyukNot = Math.max(...notlar);

  let fark = enBuyukNot - enKucukNot;

  return fark;
}
