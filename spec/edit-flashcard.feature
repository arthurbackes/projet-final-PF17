Feature: Edit a flashcard

  Scenario: Editing the front and back content of a flashcard
    Given I see a flashcard to edit
    When I click "Edit" and update the front and back content
    And I click "Save"
    Then the flashcard shows the updated content
