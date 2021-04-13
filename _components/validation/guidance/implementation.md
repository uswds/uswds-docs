- The validation component is intended primarily for usability, not as a robust security solution, since all the validation logic occurs on the client-side. The validation should be "mirrored" on the server-side for security purposes.
- Input fields which have custom validation logic can automatically provide helpful feedback to users if they are assigned a `data-validation-element` attribute set to a CSS selector that uniquely identifies a `.usa-checklist`, e.g. `data-validation-element="#validate-code"`.
- For each kind of validation you'd like to provide feedback on:
  1. Come up with a name for the validator, e.g. `uppercase`. It shouldn't have any spaces in it.
  2. On one of the list elements in the `.usa-checklist`, set the `data-validator` attribute to the name of the validator, e.g. `data-validator="uppercase"`. This is the list item that will appear "checked" when the validator's condition is met.
  3. On the input field, add a field called data-validate-validator name and set its value to a [regular expression [regexone.com]](https://regexone.com/) that represents whether the validator's condition is met, e.g. `data-validate-uppercase="[A-Z]"`.

