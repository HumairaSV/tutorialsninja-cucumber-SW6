$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user I am able to register on the tutorials ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6849503400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Verify that the user is able to register account successfully",
  "description": "",
  "id": "register-page-test;verify-that-the-user-is-able-to-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity1"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on my Account link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select \"Register\" from my Account options",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First name \"test123hv\"and last name \"Sares\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter email address \"tester58hv@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Telephone number \"0789458585\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"Password987\" and confirm password \"Password987\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Yes\" radio button to subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the privacy policy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on continue to Register",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I am able to see account created message \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on continue to navigate to account",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on my Account link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Logout\" from my Account options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I am able to see the \"Account Logout\" text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on continue to navigate to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 163724100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "AccountLoginSteps.iSelectFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 905043300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123hv",
      "offset": 20
    },
    {
      "val": "Sares",
      "offset": 45
    }
  ],
  "location": "AccountLoginSteps.iEnterFirstNameAndLastName(String,String)"
});
formatter.result({
  "duration": 131844800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester58hv@gmail.com",
      "offset": 23
    }
  ],
  "location": "AccountLoginSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 72454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0789458585",
      "offset": 26
    }
  ],
  "location": "AccountLoginSteps.iEnterTelephoneNumber(String)"
});
formatter.result({
  "duration": 60705500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password987",
      "offset": 18
    },
    {
      "val": "Password987",
      "offset": 53
    }
  ],
  "location": "AccountLoginSteps.iEnterPasswordAndConfirmPassword(String,String)"
});
formatter.result({
  "duration": 132343200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 10
    }
  ],
  "location": "AccountLoginSteps.iSelectRadioButtonToSubscribe(String)"
});
formatter.result({
  "duration": 38461600,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnThePrivacyPolicyCheckbox()"
});
formatter.result({
  "duration": 45368700,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnContinueToRegister()"
});
formatter.result({
  "duration": 259632000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 42
    }
  ],
  "location": "RegisterPageSteps.iAmAbleToSeeAccountCreatedMessage(String)"
});
formatter.result({
  "duration": 32451700,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnContinueToNavigateToAccount()"
});
formatter.result({
  "duration": 154704500,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 46935800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "AccountLoginSteps.iSelectFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 264270600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 22
    }
  ],
  "location": "AccountLoginSteps.iAmAbleToSeeTheText(String)"
});
formatter.result({
  "duration": 32649300,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginSteps.iClickOnContinueToNavigateToHomepage()"
});
formatter.result({
  "duration": 200111000,
  "status": "passed"
});
formatter.after({
  "duration": 642978700,
  "status": "passed"
});
});