const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodBuildings = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20) {
      if (type === "school" || type === "community centre") {
        goodBuildings.push(station[0]);
      }
    }
  }
  return goodBuildings;
}

console.log(chooseStations(stations));