export const generatePaginationNumbers = ( currenPage:number , totalPage: number )=>{

  if(totalPage<=7){
    return Array.from({length:totalPage},(_,i)=> i + 1);
  };


  if(currenPage<=3){
    return [1,2,3,'...',totalPage-1, totalPage];
  };

  if(currenPage>=totalPage - 2){
    return [1,2,'...',totalPage-2 , totalPage-1, totalPage];
  };

  return[
    1,
    '...',
    currenPage - 1,
    currenPage,
    currenPage + 1,
    '...',
    totalPage
  ];

};