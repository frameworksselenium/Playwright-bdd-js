/** Generated from: tests/features/enviroment.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Verify login with different enviroment", () => {

  test("Verify user is able to login with dev, qa, and prod", { tag: ["@smoketest"] }, async ({ Given, ecomLoginPage, page, And, When, Then }) => {
    await Given("I navigate to home page", null, { ecomLoginPage, page });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E-Mail Address and Password", null, { ecomLoginPage });
    await When("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/features/enviroment.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $scenarioHookFixtures: ({ page }, use) => use({ page }),
  $workerHookFixtures: [({ browser }, use) => use({ browser }), { scope: "worker" }],
});

const bddFileMeta = {
  "Verify user is able to login with dev, qa, and prod": {"pickleLocation":"9:2","tags":["@smoketest"],"ownTags":["@smoketest"]},
};