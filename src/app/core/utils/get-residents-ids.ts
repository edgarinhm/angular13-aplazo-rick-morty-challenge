export const getResidentsIds = (residents: string[]): string => {
  const residentsIds = [];
  residentsIds.push(
    residents.map((resident: string) => {
      const redisidentArray = resident.split('/');
      return redisidentArray[redisidentArray.length - 1];
    })
  );
  return residentsIds.join(',');
};
