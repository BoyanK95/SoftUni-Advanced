function constructionCrew(input) {
  let worker = input;
  let waterIntake = 0.1 * worker.weight * worker.experience;
  if (worker.dizziness === true) {
    worker.levelOfHydrated += waterIntake;
    worker.dizziness = false;
  }
  return worker;
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
