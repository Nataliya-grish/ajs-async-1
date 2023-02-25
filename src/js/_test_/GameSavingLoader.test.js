import GameSavingLoader from "../GameSavingLoader";
import GameSaving from "../GameSaving";

test("test GameSavingLoader.load()", async () => {
  const newData = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
  const value = await GameSavingLoader.load();
  expect(value).toEqual(newData);
});
