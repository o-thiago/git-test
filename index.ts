let instancesCount = 0;

class TestGitWithVim {
  constructor() {
    instancesCount++;
  }

  brothers() {
    console.log(`I have ${instancesCount} brothers...`)
  }
}

const tests: TestGitWithVim[] = []

const instancesToCreate = 3;

for (let i = 0; i < instancesToCreate; i++) {
  const newInstance = new TestGitWithVim()
  tests.push(newInstance)
}

console.log("Hey, finished creating the instances...")

tests.forEach(test => {
  test.brothers()
});

console.log("Finished running program...")

