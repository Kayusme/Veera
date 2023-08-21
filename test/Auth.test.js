const Auth = artifacts.require("Auth");

contract("Auth", function(accounts) {
  let authInstance;

  beforeEach(async function() {
    authInstance = await Auth.new();
  });

  it("should register a user", async function() {
    await authInstance.register(accounts[0], "device1");
    let user = await authInstance.users(accounts[0]);
    assert.equal(user.device, "device1");
  });

  it("should login a user", async function() {
    await authInstance.register(accounts[0], "device1");
    let isUser = await authInstance.login(accounts[0]);
    assert.equal(isUser, true);
  });

  it("should logout a user", async function() {
    await authInstance.register(accounts[0], "device1");
    await authInstance.logout(accounts[0]);
    let isUser = await authInstance.login(accounts[0]);
    assert.equal(isUser, false);
  });
});

